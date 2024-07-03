import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Certificate Generator App
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/certificate-generator" className="hover:text-gray-400">Certificate</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden mt-4 space-y-2"
        >
          <Link to="/" className="block hover:text-gray-400" onClick={toggleMenu}>Home</Link>
          <Link to="/certificate-generator" className="block hover:text-gray-400" onClick={toggleMenu}>Certificate</Link>
          <Link to="/services" className="block hover:text-gray-400" onClick={toggleMenu}>Services</Link>
          <Link to="/about" className="block hover:text-gray-400" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="block hover:text-gray-400" onClick={toggleMenu}>Contact</Link>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
