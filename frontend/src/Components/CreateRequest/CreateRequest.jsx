import React, { useState } from 'react'
import './CreateRequest.css'
import Modal from "react-modal";

import { useDispatch, useSelector } from "react-redux";

import {setType} from '../../redux/action/action'
import Modal_01 from '../Modal-01/Modal-01';
import { Document } from '../../data/doctype';



export default function CreateRequest() {
    const [tokenselectoropen, settokenselectoropen] = useState(false)
    
    const DISPATCH = useDispatch();


  return (
    <>
    <div className="CreateRequest">
       <div className="CreateRequest-top">
        <h2>Select</h2>
        <div className="list">

            {Document.map((e)=>{
                return(
                    <>
                        <span onClick={() => { settokenselectoropen(true); DISPATCH(setType({type: e.type} ))}}>
              <img src={e.img} alt="" />
              <p>{e.type}</p>  
            </span>

                    </>
                )
            })}


        </div>
       </div>
       <hr />
       <div className="CreateRequest-bot">
        
       </div>
    </div>
          <Modal isOpen={tokenselectoropen} className="Modal">
              <Modal_01 settokenselectoropen={settokenselectoropen} />
          </Modal>
    </>
  )
}
