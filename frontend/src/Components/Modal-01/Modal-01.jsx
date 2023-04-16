import React from 'react'
import './Modal-01.css'
import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

import { setType } from '../../redux/action/action'

export default function Modal_01({ settokenselectoropen }) {

    const DISPATCH = useDispatch();
    var Types = useSelector((state) => state.allTypes);
    var x =Types.type
  return (
    <>
          <div className="tokenSelector">
              <div className="topselector">
                  <h1>Select Token</h1>
                  < MdOutlineClose onClick={function () { settokenselectoropen(false) }} />
              </div>
              <hr />
              <div className="botselector">
              <p>Upload Document</p>
              <p onClick={()=>{DISPATCH(setType({types:x,method:"Manually"}))}}>Do it Manually</p>
              </div>


          </div>
    </>
  )
}
