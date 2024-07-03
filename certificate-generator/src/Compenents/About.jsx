// About.js

import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-200 to-pink-200">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4 text-lg text-gray-700">Learn more about our company:</p>
            </header>
            <section className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-gray-800">
                    Description of your company's mission.
                </p>
            </section>
            <section className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                <p className="text-lg text-gray-800">
                    Meet our dedicated team members.
                </p>
            </section>
            {/* Add more about us sections as needed */}
        </div>
    );
};

export default About;
