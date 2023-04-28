import React, { useState } from 'react'
import './LeavePermissionD.css'
import Sidebar from '../../../Sidebar/Sidebar'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../firebase-config";
export default function LeavePermissionD() {

    const [progress, setProgress] = useState(0);
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadFiles(file);
    };

    const uploadFiles = (file) => {
        //
        if (!file) return;
        const sotrageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(sotrageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(prog);
            },
            (error) => console.log(error),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("File available at", downloadURL);
                });
            }
        );
    };


  return (
    <>
    <div className="LeavePermissionD">
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
       
                      <div className="upload-doc">
                          <div className="App">
                              <form onSubmit={formHandler}>
                                  <input type="file" className="input" />
                                  <button type="submit">Upload</button>
                              </form>
                              <hr />
                              <h2>Uploading done {progress}%</h2>
                          </div>                      </div>
                  </div>

              </div>
    </div>
    </>
  )
}
