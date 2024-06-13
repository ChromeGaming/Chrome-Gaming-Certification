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
    var certificateText = document.getElementById('certificateContent').textContent;
    var blob = new Blob([certificateText], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
  
    link.href = url;
    link.download = 'experience_certificate.txt';
    link.click();
  });