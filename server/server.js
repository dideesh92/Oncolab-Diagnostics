const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Transaction = require("./models/billingschema")

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
