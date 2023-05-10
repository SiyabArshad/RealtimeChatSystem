const mongoose = require("mongoose");

const msgSchema = new mongoose.Schema({
  msgType: { type: String, default: null },
  text: { type: String, default: "text" },
  clientID: { type: String,  default: null },
  user: { type: String,  default: null },
  from: { type: String,  default: null },
  name: { type: String,  default: null },
  createdtime : { type: Date,  default: mongoose.now },
  time : { type: Date,  default: mongoose.now },
  unread: { type: String, default: 0 },
  contact_id:{ type: String, default: 0 },
});

module.exports = mongoose.model("Message", msgSchema);