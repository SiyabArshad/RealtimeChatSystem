const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const socketIO = require('socket.io');
const qrcode = require('qrcode');
const http = require('http');
const fs = require('fs');
const { phoneNumberFormatter } = require('./helpers/formatter');
const fileUpload = require('express-fileupload');
const axios = require('axios');
const port = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

/**
 * BASED ON MANY QUESTIONS
 * Actually ready mentioned on the tutorials
 * 
 * The two middlewares above only handle for data json & urlencode (x-www-form-urlencoded)
 * So, we need to add extra middleware to handle form-data
 * Here we can use express-fileupload
 */
app.use(fileUpload({
  debug: false
}));

// app.get('/', (req, res) => {
//   res.sendFile('index-multiple-account.html', {
//     root: __dirname
//   });
// });

const sessions = [];
const SESSIONS_FILE = './whatsapp-sessions.json';

const createSessionsFileIfNotExists = function() {
  if (!fs.existsSync(SESSIONS_FILE)) {
    try {
      fs.writeFileSync(SESSIONS_FILE, JSON.stringify([]));
      console.log('Sessions file created successfully.');
    } catch(err) {
      console.log('Failed to create sessions file: ', err);
    }
  }
}

createSessionsFileIfNotExists();

const setSessionsFile = function(sessions) {
  fs.writeFile(SESSIONS_FILE, JSON.stringify(sessions), function(err) {
    if (err) {
      console.log(err);
    }
  });
}

const getSessionsFile = function() {
  return JSON.parse(fs.readFileSync(SESSIONS_FILE));
}

const createSession = function({id, description, number},res) {
  console.log('Creating session: ' + id);
  const client = new Client({
    restartOnAuthFail: true,
    puppeteer: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process', // <- this one doesn't works in Windows
        '--disable-gpu'
      ],
    },
    authStrategy: new LocalAuth({
      clientId: id,
      number:number
    })
  });

  client.initialize();

  client.on('qr', (qr) => {
    // This event is triggered every 5 seconds.
    console.log('QR RECEIVED', qr);
    qrcode.toDataURL(qr, (err, url) => {
      //if(res) res.status(200).json({ id: id, src: url });
      return axios.post("http://localhost:4000/qr",{ id: id, src: url }).then(()=>{}).catch(()=>{});
    });
  });

  client.on('ready', () => {
    // io.emit('ready', { id: id });
    // io.emit('message', { id: id, text: 'Whatsapp is ready!' });

    const savedSessions = getSessionsFile();
    const sessionIndex = savedSessions.findIndex(sess => sess.id == id);
    savedSessions[sessionIndex].ready = true;
    setSessionsFile(savedSessions);
    return axios.post("http://localhost:4000/ready",{ id: id, text: 'Whatsapp is ready!' }).then(()=>{}).catch(()=>{});
  });

  client.on('authenticated', () => {
    // io.emit('authenticated', { id: id });
    // io.emit('message', { id: id, text: 'Whatsapp is authenticated!' });
    return axios.post("http://localhost:4000/authenticated",{ id: id, text: 'Whatsapp is authenticated!' }).then(()=>{}).catch(()=>{});
   
  });
  
  client.on('message', message => {
    const {from, body} = message;
    console.log(from);
    console.log(body);
    return axios.post("http://localhost:4000/receive-message",{ id: from, text: body }).then(()=>{}).catch(()=>{});
  });
   
  client.on('auth_failure', function() {
    // io.emit('message', { id: id, text: 'Auth failure, restarting...' });
    return axios.post("http://localhost:4000/auth_failure", { id: id, text: 'Auth failure, restarting...' }).then(()=>{}).catch(()=>{});
  });

  client.on('disconnected', (reason) => {
    // io.emit('message', { id: id, text: 'Whatsapp is disconnected!' });
    client.destroy();
    client.initialize();

    // Menghapus pada file sessions
    const savedSessions = getSessionsFile();
    const sessionIndex = savedSessions.findIndex(sess => sess.id == id);
    savedSessions.splice(sessionIndex, 1);
    setSessionsFile(savedSessions);
    // io.emit('remove-session', id);
    return axios.post("http://localhost:4000/disconnected", { id: id, text: 'Whatsapp is disconnected!' }).then(()=>{}).catch(()=>{});
  });

  // Tambahkan client ke sessions
  sessions.push({
    id: id,
    description: description,
    number:number,
    client: client
  });

  // Menambahkan session ke file
  const savedSessions = getSessionsFile();
  const sessionIndex = savedSessions.findIndex(sess => sess.id == id);

  if (sessionIndex == -1) {
    savedSessions.push({
      id: id,
      description: description,
      number:number,
      ready: false,
    });
    setSessionsFile(savedSessions);
  }
}

const init = function(socket) {
  const savedSessions = getSessionsFile();

  if (savedSessions.length > 0) {
    if (socket) {
      /**
       * At the first time of running (e.g. restarting the server), our client is not ready yet!
       * It will need several time to authenticating.
       * 
       * So to make people not confused for the 'ready' status
       * We need to make it as FALSE for this condition
       */
      savedSessions.forEach((e, i, arr) => {
        arr[i].ready = false;
      });

      // socket.emit('init', savedSessions);
    } else {
      savedSessions.forEach(sess => {
        createSession(sess);
      });
    }
  }
}

// init();

// Socket IO
// io.on('connection', function(socket) {
//   init(socket);

//   socket.on('create-session', function(data) {
//     console.log('Create session: ' + data.id);
//     createSession(data.id, data.description);
//   });
// });
app.post('/create-session', async (req, res) => {
  const {id, description, number} = req.body;
  console.log(req.body);
  createSession(req.body);
  res.send("======create-session=====");
  // res.send('/create-session');
})
// Send message
app.post('/send-message', async (req, res) => {
  console.log(req);

  const sender = req.body.sender;
  const number = phoneNumberFormatter(req.body.number);
  const message = req.body.message;

  const client = sessions.find(sess => sess.id == sender)?.client;

  // Make sure the sender is exists & ready
  if (!client) {
    return res.status(422).json({
      status: false,
      message: `The sender: ${sender} is not found!`
    })
  }

  /**
   * Check if the number is already registered
   * Copied from app.js
   * 
   * Please check app.js for more validations example
   * You can add the same here!
   */
  const isRegisteredNumber = await client.isRegisteredUser(number);

  if (!isRegisteredNumber) {
    return res.status(422).json({
      status: false,
      message: 'The number is not registered'
    });
  }

  client.sendMessage(number, message).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

server.listen(port, function() {
  console.log('App running on *: ' + port);
});
