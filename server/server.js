const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/billingschema")
const Patient= require("./models/Patientschema")

const app = express();
app.use(express.json());
app.use(cors({origin:"http://localhost:5173"}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/transactions", async (req, res) => {
    try {
      const transactions = await Transaction.find(); 
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch transactions" });
    }
  });
app.post("/transactions", async (req, res) => {
  try {
    const transaction = new Transaction(req.body);
    await transaction.save();
    res.status(201).json({ message: "Transaction saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save transaction" });
  }
});
app.post("/patients", async (req, res) => {
  try {
    const newPatient = new Patient(req.body);
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(500).json({ error: "Error adding patient" });
  }
});

app.get("/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ error: "Error fetching patients" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
