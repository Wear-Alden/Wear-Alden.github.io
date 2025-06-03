document.getElementById('emailForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value;
  const responseMessage = document.getElementById('responseMessage');

  fetch('https://script.google.com/macros/s/AKfycbwzD5EYyPWtxf667PeK9OBHUwmkdpuqiWnTQJSxylMWd68R3iPbfriT8kpkluWeRS5j/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${encodeURIComponent(email)}`
  }).then(() => {
    responseMessage.textContent = "Thank you for subscribing!";
    responseMessage.style.color = "green";
    form.reset();
  }).catch(() => {
    responseMessage.textContent = "Something went wrong. Please try again.";
    responseMessage.style.color = "red";
  });
});
