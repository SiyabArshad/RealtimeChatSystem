const mongoose = require("mongoose");

const PhoneSchema = new mongoose.Schema({
  clientID: { type: String,  default: null },
  phonenumber: { type: String,  default: null },
  identifier: { type: String,  default: null },
  createdtime : { type: Date,  default: mongoose.now },
  state: { type: String,  default: null },
});

module.exports = mongoose.model("Phones", PhoneSchema);