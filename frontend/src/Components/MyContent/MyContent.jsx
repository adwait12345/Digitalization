import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

export default function MyContent() {
  return (
    <>
    <div className="MyContent">
              <div className="topDashboard">
                  <h2>My Content</h2>
                  <div className="profile-login">
                      <button>AB</button>
                  </div>
              </div>
              <div className="botDashboard">
                  <div className="botDashboard-left">
                      <Sidebar />
                  </div>
                  <div className="botDashboard-right">

                  </div>

              </div>
    </div>
    </>
  )
}
