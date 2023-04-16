import React from 'react'
import './Sidebar.css'

import { MdOutlineDashboard } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsFolder } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <>
    <div className="Sidebar">
        <NavLink to='/home'>
        <li>  <MdOutlineDashboard/>
           <span>Home</span>
         </li>    
        </NavLink>
        <NavLink to='/create'>
              <li> <AiOutlinePlusCircle/> 
              <span>Create</span>
               </li>     
        </NavLink>
        <NavLink to='/mycontent'>
              <li><BsFolder/>
              <span>
                My Content
              </span>
              </li>

        </NavLink>



        </div>
        </>
  )
}
