function generateCertificate() {
  var employeeName = document.getElementById('employeeName').value;
  var companyName = document.getElementById('companyName').value;
  var duration = document.getElementById('duration').value;
  var designation = document.getElementById('designation').value;

  var date = new Date().toLocaleDateString();
  var cinNumber = 'CIN: ' + generateRandomString(21);
  var officeAddress = '1234 Elm Street, Suite 567, City, State, 12345';
  var website = 'https://www.example.com';
  var phoneNumber = '+1 (123) 456-7890';

  document.getElementById('cert-employeeName').innerText = employeeName;
  document.getElementById('cert-companyName').innerText = companyName;
  document.getElementById('cert-duration').innerText = duration;
  document.getElementById('cert-designation').innerText = designation;
  document.getElementById('cert-date').innerText = 'Date: ' + date;
  document.getElementById('cert-companyFullName').innerText = companyName;
  document.getElementById('cert-cin').innerText = cinNumber;
  document.getElementById('cert-officeAddress').innerText = 'Address: ' + officeAddress;
  document.getElementById('cert-website').innerText = 'Website: ' + website;
  document.getElementById('cert-phoneNumber').innerText = 'Phone: ' + phoneNumber;

  document.getElementById('certificate-section').style.display = 'block';
}

function downloadCertificate() {
  var element = document.getElementById('certificate');
  html2pdf().set({
      margin: 0,
      filename: 'Experience_Certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, windowWidth: 210*2.83, windowHeight: 297*2.83 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(element).save();
}

function generateRandomString(length) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}