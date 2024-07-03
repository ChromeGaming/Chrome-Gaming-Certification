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

  const generateRandomString = (length) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const generateCertificate = () => {
    setCertificateGenerated(true);

    // Scroll to certificate section
    setTimeout(() => {
      const certificateSection = document.getElementById("certificate-section");
      if (certificateSection) {
        certificateSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };

  const downloadCertificate = (format) => {
    const element = document.getElementById("certificate");
    switch (format) {
      case "pdf":
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
        break;
      case "doc":
        downloadAsDoc();
        break;
      case "txt":
        downloadAsTxt();
        break;
      default:
        break;
    }
  };

  const downloadAsDoc = () => {
    const content = `
      <html xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office"
            xmlns:w="urn:schemas-microsoft-com:office:word"
            xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
            xmlns="http://www.w3.org/TR/REC-html40">
      <head><meta charset="utf-8"><title>Experience Certificate</title></head>
      <body>
        <h2>Experience Certificate</h2>
        <p>This is to certify that <strong>${employeeName}</strong> has worked as a <strong>${designation}</strong> at <strong>${companyName}</strong> for a duration of <strong>${duration}</strong>.</p>
        <p>During their tenure, they have demonstrated excellent performance and contributed significantly to the success of our organization.</p>
        <p>We wish them all the best in their future endeavors.</p>
        <p><strong>Signature</strong></p>
        <h3>${companyName}</h3>
        <p>1234 Elm Street, Suite 567, City, State, 12345</p>
        <p>CIN: ${generateRandomString(21)}</p>
        <p>Website: https://www.example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </body>
      </html>
    `;
    const blob = new Blob(['\ufeff', content], { type: "application/msword" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Experience_Certificate.doc";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAsTxt = () => {
    const textContent = `Experience Certificate\n\n
      This is to certify that ${employeeName} has worked as a ${designation} at ${companyName} for a duration of ${duration}.\n
      During their tenure, they have demonstrated excellent performance and contributed significantly to the success of our organization.\n
      We wish them all the best in their future endeavors.\n
      \n
      Signature\n
      ${companyName}
      \n\n
      1234 Elm Street, Suite 567, City, State, 12345
      \n
      CIN: ${generateRandomString(21)}
      \n
      Website: https://www.example.com
      \n
      Phone: +1 (123) 456-7890
    `;
    const blob = new Blob([textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Experience_Certificate.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
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
          <motion.button
            type="button"
            onClick={generateCertificate}
            className="bg-green-600 text-white py-3 px-6 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 transition duration-300 w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate Certificate
          </motion.button>
        </form>
      </div>

      {certificateGenerated && (
        <motion.section
          id="certificate-section"
          className="bg-white p-6 mt-8 rounded shadow-md w-full max-w-4xl"
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
            <p id="cert-content" className="text-justify mb-6">
              This is to certify that <strong>{employeeName}</strong> has worked as a <strong>{designation}</strong> at <strong>{companyName}</strong> for a duration of <strong>{duration}</strong>.
              During their tenure, they have demonstrated excellent performance and contributed significantly to the success of our organization.
              We wish them all the best in their future endeavors.
            </p>
            <p id="cert-signature" className="mb-6">
              <strong>Signature</strong>
            </p>
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
          <div className="mt-4 flex justify-around">
            <motion.button
              onClick={() => downloadCertificate("pdf")}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download as PDF
            </motion.button>
            <motion.button
              onClick={() => downloadCertificate("doc")}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download as DOC
            </motion.button>
            <motion.button
              onClick={() => downloadCertificate("txt")}
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download as TXT
            </motion.button>
          </div>
        </motion.section>
      )}
    </motion.section>
  );
};

export default CertificateGenerator;
