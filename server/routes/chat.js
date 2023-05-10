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

// starts parts of endpoints for get data from CRM
// endpoint to get las 20 conversacion of a contact / lead -- Parameters es lead/ contacts  y el id
router.get("/conversations", async (req,res) =>{
  clientID = req.headers.clientid;
  const { contact_id } = req.query||req.body;
  console.log(contact_id)
      const message_read = await Message.find({ clientID: clientID,contact_id:contact_id}).limit(30)
      res.send(message_read);
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

// route token test JSON.parse(atob(token.split('.')[1]));

router.get("/verify", async (req,res) =>{
  const { token } = req.body;
        //const message_read = await Message.find({user});
      const jsontoken = JSON.parse(atob(token.split('.')[1]))
      res.send(jsontoken.name);
});

router.post("/receive-message", async (req,res) =>{
  const { id,text } = req.body;
        //id is phone linked to contact;
        //according to this phone number you have the contact and so the user
   res.json(req.body)   
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
