const requestModal = document.createElement('div');
const messageElement = document.getElementById("message");
requestModal.innerHTML = `
<div class="box">
  <h1>REQUEST MENTORSHIP</h1>
  <div class="FORM">
    <form action="">
      <label for="Startup-name" class="form-control">Startup-name:</label><br>
      <input type="text" id="Startup-name" name="fname" value="" required><br><br>
    
      <label for="Startup-description">Startup-description:</label><br>
      <textarea rows="9" cols="80" id="startup-description" required></textarea><br><br>
    
      <label for="mentor-questions">Questions for Mentor:</label><br>
      <textarea rows="9" cols="60" id="mentor-questions"></textarea>
      <br>
      <br>
      <button type="submit">Submit Request</button>
      <br>
      <br>
    </form>
  </div>
</div>`;

document.body.appendChild(requestModal);

requestModal.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  requestModal.style.display = 'none';

  const successModal = document.createElement('div');
  successModal.innerHTML = `
    <h2>Request Sent</h2>
    <p>Your mentorship request has been sent. You will be notified when a mentor is available.</p>
    <button onclick="window.location.href='mentor.html';" class="mentor-request">Browse other options</button>
  `;
  document.body.appendChild(successModal);
  successModal.querySelector('button').addEventListener('click', () => {
    successModal.style.display = 'none';
  });
});

document.querySelectorAll('.mentor-request').forEach((button) => {
  button.addEventListener('click', () => {
    requestModal.style.display = 'block';
  });
});

messageElement.textContent = `Thanks for applying for ${mentorName}!`;
