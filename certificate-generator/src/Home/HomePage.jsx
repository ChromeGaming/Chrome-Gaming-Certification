// Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-200 to-purple-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
                <p className="mt-4 text-lg text-gray-700">Explore what we have to offer:</p>
            </header>
            <nav className="text-center mb-8">
                <ul className="space-y-4">
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/certificate-generator" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded block transition duration-300">
                            Certificate Generator
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded block transition duration-300">
                            Contact
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/services" className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded block transition duration-300">
                            Our Services
                        </Link>
                    </motion.li>
                    <motion.li
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link to="/about" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded block transition duration-300">
                            About Us
                        </Link>
                    </motion.li>
                </ul>
            </nav>
            <section className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
                <p className="text-lg text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu nisl vitae justo dapibus venenatis in vel velit.
                </p>
                {/* Add more featured content or sections here */}
            </section>
            <section className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Latest News</h2>
                <div className="flex space-x-4">
                    <div className="bg-white p-4 shadow-md rounded-lg flex-1">
                        <h3 className="text-lg font-semibold mb-2">News Title</h3>
                        <p className="text-sm text-gray-600">Published on June 30, 2024</p>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat justo sit amet blandit lacinia.
                        </p>
                    </div>
                    {/* Add more news items or cards here */}
                </div>
            </section>
            <footer className="text-center text-gray-500">
                <p>&copy; 2024 Company Name. All rights reserved.</p>
            </footer>
        </motion.div>
    );
};

export default Home;
