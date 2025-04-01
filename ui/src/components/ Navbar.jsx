import React, { useState } from "react";
import pic from "../assets/button.png";
import Sidebar from "../Pages/SideBar"; 
import pic2 from "../assets/login.png"

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="bg-blue-500 rounded-md text-white p-4 flex justify-between items-center">
        <div className="relative">
          <button
            className="w-10 h-10"
            onClick={() => setIsSidebarOpen(prev => !prev)}
          >
            <img src={pic} alt="button icon" />
          </button>

          {isSidebarOpen && (
            <div
              className="absolute top-12 left-0 bg-blue-900 text-white p-4 w-64 shadow-lg rounded"
              onMouseLeave={() => setIsSidebarOpen(false)} 
            >
              <Sidebar />
            </div>
          )}
        </div>

        <div className="text-2xl font-extrabold tracking-wide">Oncolab Diagnostics</div>

        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium uppercase">Account / Rider Tracking</span>
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
            <img src={pic2} alt="profile" />
          </div>
          <span className="font-semibold text-lg">THOMAS</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;