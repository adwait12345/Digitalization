import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Dashboard from './Components/Dashboard/Dashboard';
import Create from './Components/Create/Create';



function App() {
  return (
<>
<Router>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/mycontent" element={<Create />} />
      </Routes>
</Router>
</>
  );
}

export default App;
