import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./components/Login/LoginPage";
import Dashboard from "./Dashboard";
import RegisterPage from "./components/Register/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<RegisterPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
