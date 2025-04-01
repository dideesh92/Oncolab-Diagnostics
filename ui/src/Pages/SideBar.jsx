import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaFileAlt,
  FaPlus,
  FaChartLine,
  FaClipboardList,
  FaFileInvoice,
  FaHeartbeat,
  FaChartBar,
  FaBook,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";

const Sidebar = () => {
  const [financialMISOpen, setFinancialMISOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-black text-white p-4">
      <div className="flex items-center space-x-2 text-lg font-semibold mb-4">
        <FaStar />
        <span>Primary Menu</span>
      </div>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaPlus />
          <span>Rider Tracking</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaFileAlt />
          <span>Workstation Master</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaChartLine />
          <span>Yearly Consolidated Report</span>
        </li>
        <li
          className="flex items-center justify-between cursor-pointer hover:bg-blue-700 p-2 rounded"
          onClick={() => setFinancialMISOpen(!financialMISOpen)}
        >
          <div className="flex items-center space-x-2">
            <FaClipboardList />
            <span>Financial MIS Reports</span>
          </div>
          <FaChevronDown className={`${financialMISOpen ? "rotate-180" : ""} transition-transform`} />
        </li>
        {financialMISOpen && (
          <ul className="ml-6 space-y-2 text-sm">
            <li
              className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded"
              onClick={() => navigate("/bill-transaction-report")}
            >
              <span>Bill Transaction Report</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded"
               onClick={() => navigate("/billing-statement")}
            >
              <FaUser />
              <span>Billing Statement</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <FaUser />
              <span>Client Advance Report</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <FaUser />
              <span>Client Billing Collection</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <span>Client Portal Registration MIS</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <span>Client Transaction Details</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <span>Collection MIS Reports</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <span>Sales Summary Report</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <span>Service Wise Transaction MIS Report</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
              <span>Transaction Details MIS Report</span>
            </li>
          </ul>
        )}
        <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaFileInvoice />
          <span>Invoice MIS Reports</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaHeartbeat />
          <span>Clinical MIS Reports</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaChartBar />
          <span>Revenue MIS Reports</span>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer hover:bg-blue-700 p-2 rounded">
          <FaBook />
          <span>Operational MIS Reports</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
