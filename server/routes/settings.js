const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const PhoneSchema = require('../models/phonenumbersModel');
const Contact = require('../models/contactModel');
const axios = require('axios');


router.get('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(401).send('Access denied.');
  res.send('Welcome to the settings page.');
});

router.post('/number', async (req, res) => {
  console.log(req.headers)
  clientID = req.headers.clientid;
  /*
  const { phonenumber, identifier,state } = req.body;
  let phonenumberunique = await PhoneSchema.findOne({ phonenumber });
  if (phonenumberunique) return res.status(400).send('Phone Number already exists');
  phonenumberunique = new PhoneSchema({ phonenumber, identifier, state, clientID});
  await phonenumberunique.save();
  console.log(phonenumberunique)
  */
  // logic for creating WP number and return the QR CODE
  const body = {
    id: clientID,
    description:"1",
    number:"+521331498458"
  }
  axios.post(`http://localhost:8000/create-session`,body).then((res) => {
    console.log(res)
  });
});

router.put("/number/:id", async (req,res) =>{
  id_number = req.params.id;

  const { state,identifier} = req.body;
  const update = {"state":state,"identifier":identifier};
      const updatestatus = await PhoneSchema.findByIdAndUpdate(id_number,update)
      res.send(updatestatus);
});

router.get("/allnumbers", async (req,res) =>{
  
  clientID = req.headers.clientid;
  console.log(clientID)
  const newphone = await PhoneSchema.find({clientID: clientID}).limit(30)
  console.log(newphone)
  res.send(newphone); 
});





module.exports = router;