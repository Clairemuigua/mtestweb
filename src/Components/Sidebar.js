import React from 'react';

function Sidebar() {
    return (
      <div className="fixed top-0 left-0 h-screen w-20 flex flex-col  text-black bg-amber-400">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact US</li>
          <li>Favorites</li>
        </ul>
      </div>
    );
  }
  

export default Sidebar;
