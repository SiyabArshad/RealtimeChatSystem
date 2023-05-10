const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  id_zoho: { type: String, default: null },
  token_zoho: { type: String, default: null },
  admin: { type: String, default: null },
  clientID: { type: String, default: null,unique:true }, 
  subscription: { type: String, default: null },
});

module.exports = mongoose.model("Company", companySchema); 