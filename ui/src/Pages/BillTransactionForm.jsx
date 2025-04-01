import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/ Navbar"
import ButtonGroup from "../components/ButtonGroup"

const BillTransactionForm = () => {
  const [formData, setFormData] = useState({
    receiptNumber: "",
    patientName: "",
    clientName: "",
    visitDate: "",
    visitID: "",
    grossAmount: "",
    discount: "",
    netAmount: "",
    paidAmount: "",
    dueAmount: "",
    paymentMode: "",
  });


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/transactions", formData);
      alert("Transaction saved successfully!");
      setFormData({
        receiptNumber: "",
        patientName: "",
        clientName: "",
        visitDate: "",
        visitID: "",
        grossAmount: "",
        discount: "",
        netAmount: "",
        paidAmount: "",
        dueAmount: "",
        paymentMode: "",
      });
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  };

  return (
    
   <div>
    <Navbar/>
    <ButtonGroup/>
     <div className="p-4 bg-gray-400 min-h-screen flex justify-center">
      <div className="bg-white p-9 rounded shadow-md w-full max-w-7xl">
        <h2 className="text-lg font-semibold mb-4 text-center">Enter Bill Transaction</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label className="block text-sm font-medium">{key.replace(/([A-Z])/g, " $1")}</label>
              <input
                type={key.includes("Date") ? "date" : "text"}
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            </div>
          ))}
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full max-w-xs">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
};

export default BillTransactionForm;