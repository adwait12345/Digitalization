import React, { useEffect, useState } from 'react'
import './Modal-01.css'
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setType } from '../../redux/action/action'
import { useNavigate,redirect } from 'react-router-dom';

export default function Modal_01({ settokenselectoropen }) {

    const [method , setmethod] = useState("")
    const navigate = useNavigate()
    var Types = useSelector((state) => state.allTypes);
    
   // Logic for redirecting on multiple forms

   useEffect(()=>{
       console.log(Types.type.type)
       
       if (Types.type.type ==="Leave Permission" && method ==="Manual" ){
       console.log("hi");
           navigate('/newpermissionManual')
   }       if (Types.type.type ==="Leave Permission" && method ==="Document" ){
       console.log("hi");
           navigate('/newpermissionDocument')
   }

  
   },[method])


  return (
    <>
          <div className="tokenSelector">
              <div className="topselector">
                  <h1>Select Method</h1>
                  < MdOutlineClose onClick={function () { settokenselectoropen(false) }} />
              </div>
              <hr />
              <div className="botselector">
                  <p onClick={() => { setmethod("Document") }}>Upload Document</p>
                  <p onClick={() => {setmethod("Manual") }}>Do it Manually</p>
              </div>


          </div>
    </>
  )
}
