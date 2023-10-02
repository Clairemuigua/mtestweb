import React from 'react';
import { ImHome3, ImPhone, ImUsers } from "react-icons/im";
import { DiCodeigniter } from "react-icons/di";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 flex flex-col text-black bg-pink-950">
      <Link to="/"> {/* Link to the Home page */}
        <SideBarIcon icon={<ImHome3 size="48" />} />
      </Link>
      <Link to="/contact"><SideBarIcon icon={<ImPhone size="48" />} /></Link>
      <Link to="/aboutus"><SideBarIcon icon={<ImUsers size="48" />} /></Link>
      <Link to="/favourites"><SideBarIcon icon={<DiCodeigniter size="48" />} /></Link>
    </div>
  );
}

const SideBarIcon = ({ icon }) => (
  <div className='SideBarIcon'>
    {icon}
  </div>
);

export default Sidebar;
