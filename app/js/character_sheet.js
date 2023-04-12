// Get the form element
const form = document.getElementById('character-form');

// Add an event listener for form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  // Get the form data
  const data = new FormData(form);

  // Send a POST request to save the character data to the server
  fetch('/save-character.php', {
    method: 'POST',
    body: data
  })
  .then(response => {
    if (response.ok) {
      alert('Character saved successfully!');
    } else {
      alert('Error saving character.');
    }
  })
  .catch(error => {
    console.error(error);
    alert('Error saving character.');
  });
});

// Add an event listener for the Load button
const loadButton = document.getElementById('load-button');
loadButton.addEventListener('click', () => {
  // Send a GET request to load the character data from the server
  fetch('/load-character.php')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      alert('Error loading character.');
      throw new Error('Error loading character.');
    }
  })
  .then(data => {
    // Populate the form with the loaded data
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        const element = form.elements[key];
        if (element) {
          element.value = data[key];
        }
      }
    }
  })
  .catch(error => {
    console.error(error);
    alert('Error loading character.');
  });
});

// Add an event listener for the Delete button
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', () => {
  // Send a DELETE request to delete the character data from the server
  fetch('/delete-character.php', {
    method: 'DELETE'
  })
  .then(response => {
    if (response.ok) {
      alert('Character deleted successfully!');
      // Clear the form
      form.reset();
    } else {
      alert('Error deleting character.');
    }
  })
  .catch(error => {
    console.error(error);
    alert('Error deleting character.');
  });
});
