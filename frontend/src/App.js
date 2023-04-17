import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Dashboard from './Components/Dashboard/Dashboard';
import Create from './Components/Create/Create';
import LeavePermission from './Components/Categories/Manual/LeavePermission/LeavePermission';
import LeavePermissionD from './Components/Categories/Document/LeavePermissionD/LeavePermissionD';



function App() {
  return (
<>
<Router>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/mycontent" element={<Create />} />
        <Route path="/newpermissionManual" element={<LeavePermission />} />
        <Route path="/newpermissionDocument" element={<LeavePermissionD />} />
      </Routes>
</Router>
</>
  );
}

export default App;
