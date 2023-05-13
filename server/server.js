const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/connectDB');
const app = express();
const PORT = process.env.PORT || 5000;
const http = require('http').Server(app);
const events=require('events')
const EventEmitter=new events.EventEmitter()
// import routes
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const settingsRoutes = require('./routes/settings');
const io = require('socket.io')(http,{
  cors:{
      origin:"*",
      method:["GET","POST"],
      allowedHeaders:["my-custom-header"],
      credentials:true
  }
});
app.use(express.json());
app.use(cors());

// defining routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/settings', settingsRoutes);
app.set("eventEmitter",EventEmitter)

const userRooms = new Map();

io.on('connection', function(socket) {
  console.log("Connected User", socket.id);

  socket.on("joinChatRoom", (payload) => {
    const { roomid } = payload;

    // Check if the user has already joined the room
    if (!userRooms.has(socket.id)) {
      // Join the room and store the association
      socket.join(roomid);
      userRooms.set(socket.id, roomid);
    }
  });

  socket.on("joinBroadCastRoom", (payload) => {
    const { roomid } = payload;

    // Check if the user has already joined the room
    if (!userRooms.has(socket.id)) {
      // Join the room and store the association
      socket.join(roomid);
      userRooms.set(socket.id, roomid);
    }
  });

  socket.on('disconnect', function() {
    console.log("client disconnected");
    
    // Remove the user-room association when the client disconnects
    if (userRooms.has(socket.id)) {
      const roomid = userRooms.get(socket.id);
      socket.leave(roomid);
      userRooms.delete(socket.id);
    }
  });
});
http.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

EventEmitter.on("receivemessage",(payload)=>{
  io.to(`chat_${payload.contact_id}`).emit("messageevent",payload)
})

EventEmitter.on("sendmessage",(payload)=>{
  io.to(`chat_${payload.contact_id}`).emit("messageevent",payload)
})

EventEmitter.on("sendmessagebroadcast",(payload)=>{
  io.to(`broadcast_${payload.clientID}`).emit("broadcastmessageevent",payload)
})
