
// Create a new user
const createUser = (user, callback) => {
  const { name, email, password } = user;
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  connection.query(query, [name, email, password], (error, result) => {
    if (error) {
      console.error('Error creating user:', error);
      callback(error);
      return;
    }
    console.log('User created successfully');
    callback(null, result);
  });
};

// Get all users
const getAllUsers = callback => {
  const query = 'SELECT * FROM users';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error getting users:', error);
      callback(error);
      return;
    }
    console.log('Users retrieved successfully');
    callback(null, results);
  });
};

// Get a user by ID
const getUserById = (usrid, callback) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  connection.query(query, [usrid], (error, result) => {
    if (error) {
      console.error('Error getting user:', err);
      callback(error);
      return;
    }
    if (result.length === 0) {
      console.error('User not found');
      callback(new Error('User not found'));
      return;
    }
    console.log('User retrieved successfully');
    callback(null, result[0]);
  });
};

// Update a user by ID
const updateUserById = (usrid, user, callback) => {
  const { name, age, email } = user;
  const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
  connection.query(query, [name, email, password, userId], (err, result) => {
    if (err) {
      console.erroror('Error updating user:', error);
      callback(error);
      return;
    }
    console.log('User updated successfully');
    callback(null, result);
  });
};

// Delete a user by ID
const deleteUserById = (userId, callback) => {
  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [userId], (error, result) => {
    if (error) {
      console.erroror('Error deleting user:', error);
      callback(error);
      return;
    }
    console.log('User deleted successfully');
    callback(null, result);
  });
};

// Close the database connection
const closeConnection = () => {
  connection.end(error => {
    if (error) {
      console.erroror('Error closing database connection:', error);
      return;
    }
    console.log('Database connection closed');
  });
};

// Export the CRUD functions
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  closeConnection
};