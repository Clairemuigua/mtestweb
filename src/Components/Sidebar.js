import React from 'react';
import { ImHome3,ImPhone,ImUsers} from "react-icons/im";
import {} from "react-icons/bs";
import { DiCodeigniter} from "react-icons/di";
import { Link } from 'react-router-dom'
const SideBar = () => {
    return (
      <div className="fixed top-0 left-0 h-screen w-20 flex flex-col  text-black bg-amber-400">

        <SideBarIcon icon  = {<ImHome3 size="48"/>}/>
        <SideBarIcon icon  = {< ImPhone size="48"/>}/>
        <SideBarIcon icon  = {<  ImUsers size="48"/>}/>
        <SideBarIcon icon  = {<DiCodeigniter size="48"/>}/>
      </div>
    );
  }
  const SideBarIcon = ({ icon}) =>(
    < div className='SideBarIcon'>
      {icon}
    </div>
  );

  

export default SideBar;
