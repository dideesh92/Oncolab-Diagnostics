import React, { useState, useEffect } from "react";
import Navbar from "../components/ Navbar";
import ButtonGroup from "../components/ButtonGroup";

const BillTransactionReport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [referralType, setReferralType] = useState("ALL");
  const [clientName, setClientName] = useState("");
  const [branch, setBranch] = useState("Oncolab Diagnostics LLC");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); 
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData(data);
    } else {
      const lowercasedSearch = searchTerm.toLowerCase();
      const filtered = data.filter(
        (item) =>
          item.patientName.toLowerCase().includes(lowercasedSearch) ||
          (item.patientID && item.patientID.toString().includes(lowercasedSearch)) ||
          (item.visitID && item.visitID.toString().includes(lowercasedSearch))
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  useEffect(() => {
    if (clientName.trim() === "") {
      setFilteredData(data);
    } else {
      const lowercasedClient = clientName.toLowerCase();
      const filtered = data.filter((item) =>
        item.clientName.toLowerCase().includes(lowercasedClient)
      );
      setFilteredData(filtered);
    }
  }, [clientName, data]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ButtonGroup />
      <div className="p-4">
        <div className="bg-white p-4 rounded shadow mb-4 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search By Patient Name / Patient ID / Encounter ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <select
            value={referralType}
            onChange={(e) => setReferralType(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="ALL">ALL</option>
          </select>
          <input
            type="text"
            placeholder="Search Client Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="Oncolab Diagnostics LLC">Oncolab Diagnostics LLC</option>
          </select>
        </div>
        <div className="bg-white p-4 rounded shadow mt-4">
          <h2 className="text-lg font-semibold mb-2">Bill Transaction MIS Report</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border p-2">S.No</th>
                <th className="border p-2">Receipt Number</th>
                <th className="border p-2">Patient Name</th>
                <th className="border p-2">Patient ID</th>
                <th className="border p-2">Client Name</th>
                <th className="border p-2">Visit Date</th>
                <th className="border p-2">Visit ID</th>
                <th className="border p-2">Gross Amount</th>
                <th className="border p-2">Discount</th>
                <th className="border p-2">Net Amount</th>
                <th className="border p-2">Paid Amount</th>
                <th className="border p-2">Due Amount</th>
                <th className="border p-2">Mode of Payment</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="13" className="text-center text-red-500 p-4">
                    No Records Found
                  </td>
                </tr>
              ) : (
                filteredData.map((item, index) => (
                  <tr key={index} className="border">
                    <td className="border p-2">{index + 1}</td>
                    <td className="border p-2">{item.receiptNumber}</td>
                    <td className="border p-2">{item.patientName}</td>
                    <td className="border p-2">{item.patientID}</td>
                    <td className="border p-2">{item.clientName}</td>
                    <td className="border p-2">{item.visitDate}</td>
                    <td className="border p-2">{item.visitID}</td>
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
    </div>
  );
};

export default BillTransactionReport;