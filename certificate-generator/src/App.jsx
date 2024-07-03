import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Compenents/Navbar";
import Home from "./Home/HomePage";
import CertificateGenerator from "./Compenents/Certificate";
import ContactForm from "./Compenents/Contact";
import Services from "./Compenents/Service";
import About from "./Compenents/About";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificate-generator" element={<CertificateGenerator />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
