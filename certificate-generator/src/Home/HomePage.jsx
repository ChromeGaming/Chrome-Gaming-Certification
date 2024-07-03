import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div className="min-h-screen flex flex-col justify-center items-center bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
            </header>
            <nav className="text-center">
                <ul className="space-y-4">
                    <li>
                        <Link to="/certificate-generator" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded block transition duration-300">
                            Certificate Generator
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded block transition duration-300">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </motion.div>
    );
};

export default Home;
