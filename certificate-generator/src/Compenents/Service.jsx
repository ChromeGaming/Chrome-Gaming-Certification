// Services.js

import React from 'react';

const Services = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-200 to-green-200">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Our Services</h1>
                <p className="mt-4 text-lg text-gray-700">Explore what we offer:</p>
            </header>
            <section className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Service 1</h2>
                <p className="text-lg text-gray-800">
                    Description of Service 1.
                </p>
            </section>
            <section className="max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-4">Service 2</h2>
                <p className="text-lg text-gray-800">
                    Description of Service 2.
                </p>
            </section>
            {/* Add more services sections as needed */}
        </div>
    );
};

export default Services;
