const form = document.querySelector('#login-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#psw').value.trim();

  // Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem('user')) || [];

  // Check if user exists
  const user = users.find(u => u.email === email);
  if (!user) {
    alert('E-mail does not exist.');
    return;
  }

  // Check if password is correct
  if (user.password !== password) {
    alert('Incorrect password.');
    return;
  }

  alert('Login successful.');
  form.reset();
});