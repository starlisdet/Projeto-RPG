const form = document.querySelector('#registration-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const confirmPassword = document.querySelector('#confirm-password').value.trim();

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  const user = {
    username,
    password
  };

  // Get existing users from localStorage
  let users = JSON.parse(localStorage.getItem('user')) || [];

  // Check if user already exists
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    alert('Username already exists.');
    return;
  }

  // Add new user to localStorage
  users.push(user);
  localStorage.setItem('user', JSON.stringify(user));

  alert('User registered successfully.');
  form.reset();
});