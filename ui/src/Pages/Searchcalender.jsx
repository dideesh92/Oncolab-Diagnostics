import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/ Navbar";
import ButtonGroup from "../components/ButtonGroup";

const SearchCalender = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/transactions", {
        params: { fromDate, toDate },
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
            <Navbar />
            <ButtonGroup />
      <div className="bg-white p-4 rounded shadow mb-4 flex items-center space-x-4">
        <div>
          <label className="text-gray-700 font-semibold">From Date</label>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="text-gray-700 font-semibold">To Date</label>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          onClick={fetchData}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search Records
        </button>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Bill Transaction Report</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="border p-2">S.No</th>
              <th className="border p-2">Receipt Number</th>
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Client Name</th>
              <th className="border p-2">Visit Date</th>
              <th className="border p-2">Gross Amount</th>
              <th className="border p-2">Discount</th>
              <th className="border p-2">Net Amount</th>
              <th className="border p-2">Paid Amount</th>
              <th className="border p-2">Due Amount</th>
              <th className="border p-2">Payment Mode</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan="11" className="text-center text-red-500 p-4">
                  No Records Found
                </td>
              </tr>
            ) : (
              data.map((item, index) => (
                <tr key={index} className="border">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.receiptNumber}</td>
                  <td className="border p-2">{item.patientName}</td>
                  <td className="border p-2">{item.clientName}</td>
                  <td className="border p-2">{item.visitDate}</td>
                  <td className="border p-2">{item.grossAmount}</td>
                  <td className="border p-2">{item.discount}</td>
                  <td className="border p-2">{item.netAmount}</td>
                  <td className="border p-2">{item.paidAmount}</td>
                  <td className="border p-2">{item.dueAmount}</td>
                  <td className="border p-2">{item.paymentMode}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchCalender;
