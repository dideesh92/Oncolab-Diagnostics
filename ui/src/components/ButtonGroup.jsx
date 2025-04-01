import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonGroup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-blue-400 p-2 rounded-md shadow-md">
      <div className="flex justify-center flex-wrap gap-1 mb-1">
      <marquee behavior="scroll" direction="left" className="text-xs text-white">
        Dear customer, Please note that there is an outstanding payment and your last due date is 23-03-2025. Kindly make the payment to be available for our support service.
      </marquee>
        {["Create", "Save", "Print", "Email", "Clear", "Refresh", "Dispatch", "Fetch", "Issues", "Close"].map((btn) => (
          <button
            key={btn}
            className="bg-blue-300 border p-2 text-black gap-2 text-xs px-4 py-2 hover:bg-white transition"
            onClick={() => btn === "Create" && navigate("/bill-transaction")}
          >
            {btn}
          </button>
        ))}
      
      </div>
     
    </div>
  );
};

export default ButtonGroup;
