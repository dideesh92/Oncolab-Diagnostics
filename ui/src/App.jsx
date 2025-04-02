import React from 'react'
import Home from './Pages/Home'
import BillTransactionReport from './Pages/BillTransactionReport'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BillTransactionForm from "./Pages/BillTransactionForm";
import ButtonGroup from "./components/ButtonGroup";
import SearchCalender from './Pages/Searchcalender';
import PatientDetails from "./Pages/PatientDetails";




const App = () => {
  return (
    
      <Router>
        <div className="flex-1 p-4">
          <Routes>
          <Route path="/patient" element={<PatientDetails />} />
          <Route path="/billing-statement" element={<SearchCalender />} />
          <Route path="/button" element={<ButtonGroup />}/>
          <Route path="/bill-transaction" element={<BillTransactionForm />} />
          <Route path="/" element={<Home/>} /> 
          <Route path="/bill-transaction-report" element={<BillTransactionReport />} />
          </Routes>
        </div>
      </Router>

    
  )
}

export default App
