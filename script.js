

document.getElementById('certificateForm').addEventListener('submit', function(e) {
  e.preventDefault();

  var employeeName = document.getElementById('employeeName').value;
  var companyName = document.getElementById('companyName').value;
  var duration = document.getElementById('duration').value;
  var designation = document.getElementById('designation').value;

  var certificateContent = `
    <p>This is to certify that <strong>${employeeName}</strong> has worked as a <strong>${designation}</strong> at <strong>${companyName}</strong> for a duration of <strong>${duration}</strong>.</p>
    <p>During their tenure, they have demonstrated excellent performance and contributed significantly to the success of our organization.</p>
    <p>We wish them all the best in their future endeavors.</p>
  `;

  document.getElementById('certificateContent').innerHTML = certificateContent;
  document.getElementById('certificateOutput').classList.remove('hidden');
  document.getElementById('downloadBtn').classList.remove('hidden');
});

document.getElementById('downloadBtn').addEventListener('click', function() {
  var { jsPDF } = window.jspdf;
  var doc = new jsPDF();

  var employeeName = document.getElementById('employeeName').value;
  var companyName = document.getElementById('companyName').value;
  var duration = document.getElementById('duration').value;
  var designation = document.getElementById('designation').value;

  var certificateText = `
    This is to certify that ${employeeName} has worked as a ${designation} at ${companyName} for a duration of ${duration}.
    During their tenure, they have demonstrated excellent performance and contributed significantly to the success of our organization.
    We wish them all the best in their future endeavors.
  `;

  var splitText = doc.splitTextToSize(certificateText, 180);
  doc.text(splitText, 10, 10);
  
  doc.save('experience_certificate.pdf');
});
