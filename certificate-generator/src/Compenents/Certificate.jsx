import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import { motion } from "framer-motion";
import { FiUser, FiBriefcase, FiCalendar, FiMapPin, FiLink, FiPhone } from "react-icons/fi";

const CertificateGenerator = () => {
  const [employeeName, setEmployeeName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [duration, setDuration] = useState("");
  const [designation, setDesignation] = useState("");
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const generateCertificate = () => {
    const date = new Date().toLocaleDateString();
    const cinNumber = `CIN: ${generateRandomString(21)}`;
    const officeAddress = "1234 Elm Street, Suite 567, City, State, 12345";
    const website = "https://www.example.com";
    const phoneNumber = "+1 (123) 456-7890";

    setCertificateGenerated(true);

    // Scroll to certificate section
    setTimeout(() => {
      document.getElementById("certificate-section").scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
  };

  const downloadCertificate = () => {
    const element = document.getElementById("certificate");
    html2pdf()
      .set({
        margin: 0,
        filename: "Experience_Certificate.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, windowWidth: 210 * 2.83, windowHeight: 297 * 2.83 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .from(element)
      .save();
  };

  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  return (
    <motion.section
      className="form-section bg-white p-6 rounded shadow-md mx-auto max-w-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Generate Certificate</h2>
      <form id="certificate-form" className="space-y-4">
        <div className="form-group">
          <label htmlFor="employeeName" className="block text-sm font-semibold mb-1">
            <FiUser className="inline-block mr-2" /> Employee Name:
          </label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName" className="block text-sm font-semibold mb-1">
            <FiBriefcase className="inline-block mr-2" /> Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration" className="block text-sm font-semibold mb-1">
            <FiCalendar className="inline-block mr-2" /> Duration:
          </label>
          <input
            type="text"
            id="duration"
            name="duration"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation" className="block text-sm font-semibold mb-1">
            <FiMapPin className="inline-block mr-2" /> Designation:
          </label>
          <input
            type="text"
            id="designation"
            name="designation"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-600"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={generateCertificate}
          className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-300 w-full"
        >
          Generate Certificate
        </button>
      </form>

      {certificateGenerated && (
        <motion.section
          id="certificate-section"
          className="certificate-section bg-white p-6 mt-8 rounded shadow-md mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div id="certificate" className="a4 p-4">
            <div className="header flex justify-between items-center mb-4">
              <img
                id="cert-logo"
                src="/Chrome-Gaming-Certification/google-ar21.svg"
                alt="Company Logo"
                className="w-32"
              />
              <p id="cert-date" className="text-right">
                Date: {new Date().toLocaleDateString()}
              </p>
            </div>
            <h2 className="text-2xl font-bold mb-4">Experience Certificate</h2>
            <div id="cerdiv" className="mb-8">
              <p>
                This is to certify that{" "}
                <span id="cert-employeeName" className="font-semibold">
                  {employeeName}
                </span>{" "}
                has worked as a{" "}
                <span id="cert-designation" className="font-semibold">
                  {designation}
                </span>{" "}
                at{" "}
                <span id="cert-companyName" className="font-semibold">
                  {companyName}
                </span>{" "}
                for a duration of{" "}
                <span id="cert-duration" className="font-semibold">
                  {duration}
                </span>
                .
              </p>
              <p>
                During their tenure, they have demonstrated excellent performance and contributed
                significantly to the success of our organization.
              </p>
              <p>We wish them all the best in their future endeavors.</p>
            </div>
            <div className="signature-section text-left mb-8">
              <p>
                <strong>Signature</strong>
              </p>
              <h3 id="cert-companyFullName" className="font-semibold">
                {companyName}
              </h3>
            </div>
            <div className="footer">
              <div className="footer-line">
                <p id="cert-officeAddress">
                  <FiMapPin className="inline-block mr-2" />
                  1234 Elm Street, Suite 567, City, State, 12345
                </p>
              </div>
              <div className="footer-line">
                <p id="cert-cin">{`CIN: ${generateRandomString(21)}`}</p>
                <p id="cert-website">
                  <FiLink className="inline-block mr-2" />
                  Website: https://www.example.com
                </p>
                <p id="cert-phoneNumber">
                  <FiPhone className="inline-block mr-2" />
                  Phone: +1 (123) 456-7890
                </p>
              </div>
            </div>
          </div>
          <button
            id="downloadBtn"
            onClick={downloadCertificate}
            className="bg-blue-600 text-white py-2 px-4 mt-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300 w-full"
          >
            Download Certificate
          </button>
        </motion.section>
      )}
    </motion.section>
  );
};

export default CertificateGenerator;
