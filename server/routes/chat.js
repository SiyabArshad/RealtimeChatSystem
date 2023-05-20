const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Message = require('../models/msgModel');
const Contact = require('../models/contactModel');

let clientID=''
let contact_id=''
router.get('/', auth, async (req, res) => {
  res.json({message:"Funciona Chingado"})
});

router.get("/conversations", async (req,res) =>{
  clientID = req.headers.clientid;
  const { contact_id } = req.query||req.body;
  console.log(contact_id)
  const message_read = await Message.find({ clientID, contact_id })
  .sort({ _id: -1 }) // Sort in ascending order based on _id
  .limit(30); // Limit the result to 30 records
      res.send(message_read.reverse());
});

router.get("/allconversations", async (req,res) =>{
  clientID = req.headers.clientid;
  const {  contact_id } = req.body;
      const message_read = await Message.find({clientID: clientID}).limit(30)
      res.send(message_read);
});

//endpoint to get last conversion by ID
router.get("/uniqueconversation/:id", async (req,res) =>{
  contact_id = req.params.id;

  page_number = req.query.page_number;
  console.log(page_number)
      const message_read = await Message.find({ contact_id: contact_id }).limit(1).skip(page_number)
      res.send(message_read);
});

// endpoint to create message
router.post("/conversations", async (req,res) =>{
  clientID = req.headers.clientid;
  const { user ,text,from,msgType,contact_id} = req.body;
        const message_create = await Message.create({
        msgType: msgType,
        text: text,
        clientID:clientID ,
        user: user,
        from: from,
        contact_id:contact_id,
      });
      const events=req.app.get("eventEmitter")
      events.emit("sendmessage",message_create)
      res.send(message_create);
});
// endpoint to get last 20 conversation with page  // param is page
// router.get("/lastconversations", async (req,res) =>{
//   clientID = req.headers.clientid;
//        const last_message_read = await Message.aggregate([{ $match : { clientID : clientID } },
//             {"$group": 
//                {"_id": "$user",
//                "id": {"$first": "$_id"},
//                "contactid":{"$first":"$contact_id"},
//                 "text": {"$first": "$text"},
//                 "from":{"$first": "$from"},
//                 "name":{"$first": "$name"},
//                 "time":{"$first": "$time" },
//                 "unread":{"$first": "$unread"},
              
//               }}
//             ])
//       res.send(last_message_read);
// });your old code 
router.get("/lastconversations", async (req, res) => {
  const clientID = req.headers.clientid;

  const last_message_read = await Message.aggregate([
    { $match: { clientID: clientID } },
    { $sort: { time: -1 } }, // Sort messages by time in descending order
    {
      $group: {
        _id: "$contact_id",
        id: { $first: "$_id" },
        contactid: { $first: "$contact_id" },
        text: { $first: "$text" },
        from: { $first: "$from" },
        name: { $first: "$name" },
        time: { $first: "$time" },
        unread: { $first: "$unread" },
      },
    },
  ]);

  res.send(last_message_read);
});


// endpoint to create new contact
router.post("/contact", async (req,res) =>{
  clientID = req.headers.clientid;
  const { first_name, last_name,email,phone,user} = req.body;
  console.log(req.body)
  const responsenewContact = await Contact.findOne({ phone:phone, clientID : clientID });
  async function createcontact() {
    const contact_create = await Contact.create({
        first_name: first_name,
        last_name: last_name,
        email:email ,
        phone: phone,
        clientID: clientID,
        user:user
        })
      return res.send(contact_create);
    }

  if (responsenewContact) {
    return res.status(409).send("Contact Already Exist. Please No lo dupliques");
  }
  else(
   createcontact()
   
  )   
});
//get all contacts
router.get("/contact", async (req,res) =>{
  clientID = req.headers.clientid;
  const responsenewContact = await Contact.find({clientID : clientID });
  res.send(responsenewContact)
  } 
);

// route token test JSON.parse(atob(token.split('.')[1]));

router.get("/verify", async (req,res) =>{
  const { token } = req.body;
        //const message_read = await Message.find({user});
      const jsontoken = JSON.parse(atob(token.split('.')[1]))
      res.send(jsontoken.name);
});

router.post("/receive-message", async (req,res) =>{
  const { id,text,user,contact_id,clientID } = req.body;
  //you can add these messages to datab base 
  const receivemessage = {
    msgType: 'inbound',
    text: text,
    clientID: clientID,
    user: user,
    from: id,
    name: null,
    unread: '0',
    contact_id: contact_id,
    time: new Date(),
  };
  //do some database stuff here you can store it to db
  const events=req.app.get("eventEmitter")
  events.emit("receivemessage",receivemessage)
  //id is phone linked to contact;
        //according to this phone number you have the contact and so the user
   res.json(receivemessage)   
});

router.get("/contact/:id",async(req,res)=>{
  try{
    const contactinfo=await Contact.findOne({_id:req.params.id})
    res.json(contactinfo)
  }
  catch{
    res.status(500).json("Internal Server Error")
  }

})
module.exports = router;

//broadcasting messages
router.post("/broadcast", async (req, res) => {
  const clientID = req.headers.clientid;
  const { user, text, from, msgType } = req.body;

  const messageType = {
    msgType: msgType,
    text: text,
    clientID: clientID,
    user: user,
    from: from,
    time: new Date(),
  };

  try {
    const allContacts = await Contact.find({ clientID: clientID }).lean();

    if (allContacts.length > 0) {
      const messagePromises = allContacts.map(async (item) => {
        const contactId = item._id.toHexString();
        const message = {
          msgType: msgType,
          text: text,
          clientID: clientID,
          user: user,
          from: from,
          contact_id: contactId,
        };
        const createdMessage = await Message.create(message);
        return createdMessage;
      });

      const createdMessages = await Promise.all(messagePromises);

      const events = req.app.get("eventEmitter");
      events.emit("sendmessagebroadcast", messageType);

      res.status(200).json({
        success: true,
        message: "Broadcast sent successfully",
        messageType: messageType,
        createdMessages: createdMessages,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No contacts found for the client",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while processing the request",
      error: error.message,
    });
  }
});
