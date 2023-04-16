import React from 'react'
import './Create.css'
import Sidebar from '../Sidebar/Sidebar'
import CreateRequest from '../CreateRequest/CreateRequest'
export default function Create() {
  return (
    <>
    <div className="Create">
              <div className="topDashboard">
                  <h2>Create</h2>
                  <div className="profile-login">
                      <button>AB</button>
                  </div>
              </div>
              <div className="botDashboard">
                  <div className="botDashboard-left">
                      <Sidebar />
                  </div>
                  <div className="botDashboard-right">
                   <CreateRequest/>
                  </div>

              </div>
        </div>
        </>
  )
}
