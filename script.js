const form = document.getElementById('contactForm');
const messageList = document.getElementById('messageList');

document.addEventListener('DOMContentLoaded', loadMessages);
form.addEventListener('submit', saveMessage);

function saveMessage(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  const newMessage = { name, email, message };
  const messages = getMessages();
  messages.push(newMessage);
  localStorage.setItem('messages', JSON.stringify(messages));

  form.reset();
  displayMessages();
}

function getMessages() {
  return JSON.parse(localStorage.getItem('messages')) || [];
}

function displayMessages() {
  const messages = getMessages();
  messageList.innerHTML = '';

  messages.forEach((msg, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${msg.name}</strong> (${msg.email})<br>
      ${msg.message}
    `;
    messageList.appendChild(li);
  });
}

function loadMessages() {
  displayMessages();
}