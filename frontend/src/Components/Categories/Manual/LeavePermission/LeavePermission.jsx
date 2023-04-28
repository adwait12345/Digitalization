import React, { useEffect, useState } from 'react'
import './LeavePermission.css'
import Axios from "axios";
import Sidebar from '../../../Sidebar/Sidebar'
export default function LeavePermission() {

  const url = "http://localhost:8000/subscribers";
  const [data, setData] = useState({
    regno:"",
    email: "",
    firstname: "",
    lastname: "",
    reason: "",
    status:"pending"
  });
  const [posting, setposting] = useState(false);
  const [exists, setexists] = useState(false);
  const [success, setSuccess] = useState(false);
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  
  const submit = async (e) => {
   
    console.log(data)
    e.preventDefault();
    setposting(true);
    try {
      await Axios.post(url, {
        uniqueId:data.regno,
        data:[
          {
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            reason: data.reason,
            status:data.status
          }
        ]

      }).then((res) => {
        setposting(false);

        setexists(false);
        setSuccess(true);
      });
    } catch (error) {
      console.log("User Already exists");
      setposting(false);

      setexists(true);

      setSuccess(false);
    }
  };

  return (
    <>
    <div className="LeavePermission">
        <div className="topDashboard">
          <h2>Dashboard</h2>
          <div className="profile-login">
            <button>AB</button>
          </div>
        </div>
        <div className="botDashboard">
          <div className="botDashboard-left">
            <Sidebar />
          </div>
          <div className="botDashboard-right">
            <div className="leave-form">
              <form className="middle" onSubmit={(e) => submit(e)}>
                <div className="middle-top">
                  <h2>
                  Leave Application
                  </h2>
                </div>
                <div className="middle-mid">
                  <input
                    required
                    type="text"
                    placeholder="Reg No"
                    onChange={(e) => handle(e)}
                    value={data.regno}
                    id="regno"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => handle(e)}
                    value={data.email}
                    id="email"
                  />
                  <input
                    required
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => handle(e)}
                    value={data.firstname}
                    id="firstname"
                  />
                  <input
                    required
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => handle(e)}
                    value={data.lastname}
                    id="lastname"
                  />
                  <textarea
                    required
                    type="text"
                    placeholder="Leave Reason"
                    onChange={(e) => handle(e)}
                    value={data.reason}
                    id="reason"
                  />
                </div>
                <div className="middle-below">
                  <button >
                    Post
                  </button>
                </div>
              </form>
            </div>

          </div>

        </div>
    </div>
    </>
  )
}
