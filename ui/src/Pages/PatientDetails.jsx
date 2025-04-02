import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/ Navbar";
import ButtonGroup from "../components/ButtonGroup";

const PatientDetails = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    try {
      const response = await axios.get("http://localhost:3000/patients");
      setPatients(response.data);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/patients", formData);
      fetchPatients(); 
      setFormData({ name: "", age: "", gender: "", email: "", phone: "" });
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
    <ButtonGroup />
    <div className="w-2/3 p-8">
        <h2 className="text-2xl font-bold mb-4">Add Patient</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Patient
          </button>
        </form>
      </div>
      <div className="w-3/3 bg-white shadow p-9 overflow-auto">
        <h2 className="text-xl font-bold mb-4">Patient List</h2>
        {patients.length === 0 ? (
          <p className="text-gray-500">No patients added</p>
        ) : (
          <ul>
            {patients.map((patient, index) => (
              <li key={index} className="border-b py-2">
                <p><strong>Name:</strong> {patient.name}</p>
                <p><strong>Age:</strong> {patient.age}</p>
                <p><strong>Gender:</strong> {patient.gender}</p>
                <p><strong>Email:</strong> {patient.email}</p>
                <p><strong>Phone:</strong> {patient.phone}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default PatientDetails;
