const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const Company = require('../models/companyModel');

// Current User information
router.get('/', auth, async (req, res) => {
  const profile = await User.findById(req.user._id);
  res.send(profile);
});

router.get('/allusers', async (req, res) => {
  const profile = await User.find({role:"admin"}).limit(30)
  res.send(profile);
});



router.post('/newuser', async (req, res) => {
  console.log(req.headers.clientid)
  clientID = req.headers.clientid;
  const { email, name, password, role } = req.body;
  let user = await User.findOne({ email });
  if (user) return res.status(400).send('User already exists');
  user = new User({ email, name, password, role, clientID});
  await user.save();
  console.log(user)
  res.send(user);
});

// Register User
router.post('/', async (req, res) => {
  const { email, name, password, role } = req.body;

  // Checking User
  let user = await User.findOne({ email });
  if (user) return res.status(400).send('User already exists');

  let clientID =   Math.random(1,15000).toString().replace('0.', '') ;

  // Save User Into Database
  user = new User({ email, name, password, role,clientID });
  await user.save();

  // Save Company into Database
  company = new Company({clientID,admin:user._id})
  await company.save();

  // Generate Token
  const jwtData = { _id: user._id, role: user.role,clientID };
  const token = jwt.sign(jwtData, process.env.JWTSECRET, { expiresIn: '2h' });

  res.send(token);

});

module.exports = router;
