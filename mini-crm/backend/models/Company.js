const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({

  name: String,

  industry: String,

  location: String,

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Company",
  companySchema
);