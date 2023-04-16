import React from 'react'
import './Dashboard.css'
import Sidebar from '../Sidebar/Sidebar'




export default function Dashboard(props) {
  return (
    <>
    <div className="Dashboard">
        <div className="topDashboard">
            <h2>Dashboard</h2>
             <div className="profile-login">
               <button>AB</button> 
             </div>
        </div>
        <div className="botDashboard">
                  <div className="botDashboard-left">
                  <Sidebar/>
                  </div>
                  <div className="botDashboard-right">

                  </div>

        </div>
    </div>
    </>
  )
}
