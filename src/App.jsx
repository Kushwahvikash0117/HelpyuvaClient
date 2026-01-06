import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import JoinUs from "./pages/JoinUs";
import Impact from "./pages/Impact";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Donate from "./pages/Donate"; // 1. Import the Donate page
import Login from "./pages/Login";
import Signup from "./pages/Signup";


import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        {/* 2. Add the Donate route */}
        <Route path="/donate" element={<Donate />} /> 
        

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
