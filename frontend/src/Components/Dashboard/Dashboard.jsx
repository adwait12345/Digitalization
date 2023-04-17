import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import { BiTime } from 'react-icons/bi';

import axios from "axios";

export default function Dashboard() {
  const [responce, setresponce] = useState([]);
  const [status, setstatus] = useState("");

  useEffect(() => {
    // Using the Request Config
    axios({
      method: "get",
      url: "http://localhost:8000/subscribers/2020BEC067",
    }).then(function (response) {
      setresponce(response.data);
    });

    //     if (responce.data[0].status===false){
    //       setstatus("Pending")
    // }
  }, []);

  return (
    <>
      <div className="Dashboard">
        <div className="topDashboard">
          <h2>Dashboard</h2>
          <div className="profile-login">
                     <div class="sharethis-inline-share-buttons"></div>
            {/* <button>AB</button> */}
          </div>
        </div>
        <div className="botDashboard">
          <div className="botDashboard-left">
            <Sidebar />
          </div>
          <div className="botDashboard-right">
            <div className="board">
              <h4>Recent Applications</h4>
              {responce.map((e) => {
                return (
                  <>
                    <div className="message">
                      <div className="topp">
                        <>
                          <div className="lef">
                                  <p>
                            <strong>Name: </strong>
                            {e.data[0].firstname} {e.data[0].lastname}
                          </p>                        &nbsp;&nbsp;&nbsp;&nbsp;     <p>
                            <strong>Email: </strong>
                            {e.data[0].email}
                          </p>
                          </div>
                                    <div className="rig"><BiTime/> <p> {e.data[0].status}</p></div>
                  
                         

                        </>

                       
                      </div>
                      <div className="bot">
                        <p>
                          <strong>Concern: </strong>
                          {e.data[0].reason}{" "}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
