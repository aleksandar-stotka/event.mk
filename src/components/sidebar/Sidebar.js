import "./Sidebar.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { CgAdd } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePersonalInjury } from "react-icons/md";





function Sidebar() {
 
  return (
    <div className="flex min-h-screen flex justify-center ">
  
  <aside className="text-black w-96   md:w-20 lg:w-64 fixed bottom-0 w-full bg-gray-800 text-white py-4  bg-opacity-75   transition-all duration-300 z-30">
    <div className="p-4">
     
      <ul>
      <NavLink to="/dashboard">
              <MdDashboard className="w-10 h-6" />

                <span>Dashboard</span>
              </NavLink>
      <NavLink to="/create">
              <CgAdd className="w-10 h-6"  />

                <span className="new-project">New Project</span>
              </NavLink>
              <NavLink to="/personal">
              <MdOutlinePersonalInjury className="w-10 h-6"  />

                <span className="new-project">Personal projects</span>
              </NavLink>
      </ul>
    </div>
  </aside>


  
</div>

  
      /*<div >
        
        <nav > 
          <ul className="  flex justify-end gap-5 " >
            <li>
              <NavLink to="/">
              <MdDashboard className="w-10 h-6" />

                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
            
            </li>
            <li>
              <NavLink to="/create">
              <CgAdd className="w-10 h-6"  />

                <span className="new-project">New Project</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/personal">
              <MdOutlinePersonalInjury className="w-10 h-6"  />

                <span className="new-project">Personal projects</span>
              </NavLink>
              
            </li>
          </ul>
        </nav>
      </div>*/
   
  );
}

export default Sidebar;
