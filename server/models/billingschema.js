const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  receiptNumber: String,
  patientName: String,
  clientName: String,
  visitDate: String,
  visitID: String,
  grossAmount: String,
  discount: String,
  netAmount: String,
  paidAmount: String,
  dueAmount: String,
  paymentMode: String,
});

module.exports = mongoose.model("Transaction", TransactionSchema );