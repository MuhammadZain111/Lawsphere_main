import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './screens/Home';
import About from './screens/About';
import NoPage from './screens/NoPage';
import RegisterLawyer from './screens/RegisterLawyer';
import RegisterUser from './screens/RegisterUser';
import RegistrationSelection from './screens/RegistrationSelection';
import LawyerDashboard from './screens/LawyerDashboard.jsx';
import Services from './screens/Services';

const App = () => {
  return (
   <div>

       <nav>
        <Link to="/"></Link> 
        <Link to="/about"></Link>
        <Link to="/registerLawyer"></Link>
        <Link to="/lawyerDashboard"></Link>
        <Link to="/services"></Link>
        <Link to="/lawyerdashboard"></Link>

      </nav>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/registration-selection" element={<RegistrationSelection />} />
      <Route path="/registerUser" element={<RegisterUser />} />
      <Route path="/registerLawyer" element={<RegisterLawyer />} />
      <Route path="/lawyerDashboard" element={<LawyerDashboard />} />
      <Route path="/services" element={<Services />} />
      
        <Route path="*" element={<NoPage />} />
      </Routes>
   </div>

   
      
  );
};

export default App;
