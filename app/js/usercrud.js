const form = document.querySelector('#user-form');
const userList = document.querySelector('#user-list');

let users = [];

// Create user
form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const id = document.querySelector('#id').value;

  if (!name || !email) {
    alert('Please provide a name and email.');
    return;
  }

  const user = {
    name,
    email,
    password,
    id: id || new Date().getTime().toString()
  };

  if (id) {
    const index = users.findIndex(u => u.id === id);
    users.splice(index, 1, user);
    clearForm();
  } else {
    users.push(user);
    clearForm();
  }

  renderUsers();
});

// Read users
function renderUsers() {
  userList.innerHTML = '';
  users.forEach(user => {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdEmail = document.createElement('td');
    const tdPassword = document.createElement('td');
    const tdActions = document.createElement('td');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    tdName.textContent = user.name;
    tdEmail.textContent = user.email;
    tdPassword.textContent = user.password || '-';
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
      document.querySelector('#name').value = user.name;
      document.querySelector('#email').value = user.email;
      document.querySelector('#password').value = user.password || '';
      document.querySelector('#id').value = user.id;
    });

    //delete user
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      const index = users.findIndex(u => u.id === user.id);
      users.splice(index, 1);
      renderUsers();
    });

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPassword);
    tr.appendChild(tdActions);

    userList.appendChild(tr);
  });
}

// Update user
function clearForm() {
  document.querySelector('#user-form').reset;
}