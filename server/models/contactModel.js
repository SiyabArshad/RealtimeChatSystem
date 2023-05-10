const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  id_zoho: { type: String, default: null },
  first_name: { type: String, default: null },
  last_name: { type: String,  default: null },
  email: { type: String,  default: null },
  phone: { type: String,  default: null },
  module_zoho: { type: String,  default: null },
  stage_zoho: { type: String,  default: null },
  created_time: { type: Date,  default: mongoose.now },
  clientID: { type: String,  default: null },
  user:{ type: String,  default: null },
});

module.exports = mongoose.model("Contact", contactSchema);