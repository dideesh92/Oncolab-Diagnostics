const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    email: String,
    phone: String,
  });
  
module.exports = mongoose.model("Patient", PatientSchema );

