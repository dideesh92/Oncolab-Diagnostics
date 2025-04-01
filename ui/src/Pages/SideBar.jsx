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
    <div className="w-64 h-screen text-white p-4 shadow-none">
      <div className="flex items-center space-x-2 text-lg font-semibold mb-4">
        <FaStar />
        <span>Primary Menu</span>
      </div>
      <ul className="space-y-2">
        {[
          { label: "Rider Tracking", icon: <FaPlus />, path: "/" },
          { label: "Workstation Master", icon: <FaFileAlt /> },
          { label: "Yearly Consolidated Report", icon: <FaChartLine /> },
        ].map((item, index) => (
          <li
            key={index}
            className="relative flex items-center space-x-2 cursor-pointer p-2 rounded transition-all duration-300 group"
            onClick={() => item.path && navigate(item.path)}
          >
            <span className="absolute inset-0 bg-blue-700 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
            <span className="relative flex items-center space-x-2">
              {item.icon}
              <span>{item.label}</span>
            </span>
          </li>
        ))}
        <li
          className="relative flex items-center justify-between cursor-pointer p-2 rounded transition-all duration-300 group"
          onClick={() => setFinancialMISOpen(!financialMISOpen)}
        >
          <span className="absolute inset-0 bg-blue-700 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
          <div className="relative flex items-center space-x-2">
            <FaClipboardList />
            <span>Financial MIS Reports</span>
          </div>
          <FaChevronDown className={`${financialMISOpen ? "rotate-180" : ""} transition-transform`} />
        </li>

        {financialMISOpen && (
          <ul className="ml-6 space-y-2 text-sm">
            <li
              className="relative flex items-center space-x-2 cursor-pointer p-2 rounded transition-all duration-300 group"
              onClick={() => navigate("/bill-transaction-report")}
            >
              <span className="absolute inset-0 bg-blue-700 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
              <span className="relative">Bill Transaction Report</span>
            </li>
            <li
              className="relative flex items-center space-x-2 cursor-pointer p-2 rounded transition-all duration-300 group"
              onClick={() => navigate("/billing-statement")}
            >
              <span className="absolute inset-0 bg-blue-700 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
              <FaUser className="relative" />
              <span className="relative">Billing Statement</span>
            </li>
          </ul>
        )}

        {[
          { label: "Invoice MIS Reports", icon: <FaFileInvoice /> },
          { label: "Clinical MIS Reports", icon: <FaHeartbeat /> },
          { label: "Revenue MIS Reports", icon: <FaChartBar /> },
          { label: "Operational MIS Reports", icon: <FaBook /> },
        ].map((item, index) => (
          <li
            key={index}
            className="relative flex items-center space-x-2 cursor-pointer p-2 rounded transition-all duration-300 group"
          >
            <span className="absolute inset-0 bg-blue-700 scale-0 rounded-full transition-transform duration-300 group-hover:scale-100"></span>
            <span className="relative flex items-center space-x-2">
              {item.icon}
              <span>{item.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
