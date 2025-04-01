import React,{useState} from 'react'
import Navbar from "../components/ Navbar.jsx"; 
import ButtonGroup from "../components/ButtonGroup.jsx";
import Sidebar from '../Pages/SideBar.jsx';
import Footer from '../components/Footer.jsx'


const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const options = [
      "Select",
      "Oncolab",
      "CDoncolab",
      "muzammil",
      "SAFEER KARAT",
      "Dr.Saeid Gholam Hossein Azizi",
      "SUHA",
      "WAJAHAT ALI",
      "GOPIKA",
      "ANJU JOHN",
      "ANN KATHLEEN",
      "REJISH",
      "MUHEENUDEEN M.K",
      "ERFAN ALAM",
      "THOMAS",
      "NILEENA V R",
      "ARSHA K R",
    ];
  
    return (
      
      <div className="min-h-screen bg-white flex">
         {isSidebarOpen && <Sidebar />}
         <div 
          className={`flex-1 p-4 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`} 
        >
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
          <ButtonGroup />
          <div className="mt-1 bg-gray-200 h-screen w-full rounded-md shadow-md flex justify-center items-center overflow-hidden">
            <select className="border rounded-md w-50 text-xs">
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <div className="right-36 flex items-center space-x-2">
              <label htmlFor="auto-refresh" className="text-black ml-3 text-xs">
                Auto Refresh
              </label>
              <input
                type="radio"
                id="auto-refresh"
                name="refresh"
                className="border rounded-md"
              />
            </div>
          </div>
          <Footer/>
        </div>
        </div>
    );
  };
  
  export default Home;
  
