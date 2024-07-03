import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactForm = () => {
  return (
    <motion.footer
      className="flex flex-col items-center justify-center bg-gray-800 text-white py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-lg w-full bg-slate-800 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
        <form id="contact-form" className="space-y-4">
          <div className="form-group">
            <label htmlFor="contactName" className="block text-sm font-semibold mb-1">
              <FiUser className="inline-block mr-2" /> Your Name:
            </label>
            <input
              type="text"
              id="contactName"
              name="contactName"
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-black-300 rounded focus:outline-none focus:border-green-600 text-black"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail" className="block text-sm font-semibold mb-1">
              <FiMail className="inline-block mr-2" /> Your Email:
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600  text-black"
            />
          </div>
          <div className="form-group">
            <label htmlFor="contactMessage" className="block text-sm font-semibold mb-1">
              <FiMessageCircle className="inline-block mr-2" /> Your Message:
            </label>
            <textarea
              id="contactMessage"
              name="contactMessage"
              placeholder="Enter your message"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600  text-black"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.footer>
  );
};

export default ContactForm;
