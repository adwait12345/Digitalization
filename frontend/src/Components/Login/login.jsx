import React from 'react'
import './login.css'
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPhoneNumber, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { useNavigate, redirect } from 'react-router-dom';

import { auth } from '../../firebase-config'


  

export default function Login() {

    const navigate = useNavigate()


    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")



    const Login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            navigate('/home')
            console.log(onAuthStateChanged())
        }
        catch (error) {
            console.log(error.message)
        }}


  return (
    <>
    <div className="login-outer">
                  <form className="Login">
              <h2>Login</h2>

              <input type="email" placeholder="Email/Phone No" onChange={(event) => { setLoginEmail(event.target.value) }} required />
              <input type="password" placeholder="Password" onChange={(event) => { setLoginPassword(event.target.value) }} required />
              <button type='button' onClick={Login}>Login</button>
          </form>
    </div>

    </>
  )
  }
