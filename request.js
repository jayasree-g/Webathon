const requestModal = document.createElement('div');

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