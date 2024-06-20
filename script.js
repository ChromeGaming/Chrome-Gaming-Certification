// document.getElementById('certificateForm').addEventListener('submit', function(e) {
//     e.preventDefault();
  
//     const employeeName = document.getElementById('employeeName').value;
//     const companyName = document.getElementById('companyName').value;
//     const duration = document.getElementById('duration').value;
//     const designation = document.getElementById('designation').value;
  
//     const certificateContent = `
//       <p>This is to certify that <strong>${employeeName}</strong> has worked as a <strong>${designation}</strong> at <strong>${companyName}</strong> for a duration of <strong>${duration}</strong>.</p>
//       <p>During their tenure, they have demonstrated excellent performance and contributed significantly to the success of our organization.</p>
//       <p>We wish them all the best in their future endeavors.</p>
//     `;
  
//     document.getElementById('certificateContent').innerHTML = certificateContent;
//     document.getElementById('certificateOutput').classList.remove('hidden');
//     document.getElementById('downloadBtn').classList.remove('hidden');
//   });
  
//   document.getElementById('downloadBtn').addEventListener('click', function() {
//     const certificateText = document.getElementById('certificateContent').textContent;
//     const blob = new Blob([certificateText], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement('a');
  
//     link.href = url;
//     link.download = 'experience_certificate.txt';
//     link.click();
//   });
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('employeeName')
const designationInput = document.getElementById('designation')
const company = document.getElementById('companyName')
const Duration = document.getElementById('duration')
const downloadBtn = document.getElementById('download-btn')
const image = new Image()

image.src = "certi.jpg.jpg"
image.onload = function () {
	drawImage()
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.drawImage(image,-70, -14, canvas.width, canvas.height)
	ctx.font = '10px sans-serif'
	ctx.fillStyle = '#FFFFFF'
	ctx.fillText(nameInput.value, 40, 180)
	ctx.fillText(designationInput.value, 160, 200)
	ctx.fillText(company.value,220,200 )
	
}

nameInput.addEventListener('input', function () {
	drawImage()
})
company.addEventListener('input', function () {
	drawImage()
})
designationInput.addEventListener('input', function () {
	drawImage()
})

downloadBtn.addEventListener('click', function () {
	downloadBtn.href = canvas.toDataURL('image/jpg')
	downloadBtn.download = 'Certificate - ' + nameInput.value
})


