// Create a new user
const createUser = (user, callback) => {
  const { name, email, psw } = user;
  const query = 'INSERT INTO user (name, email, psw) VALUES (?, ?, ?)';
  connection.query(query, [name, email, psw], (error, result) => {
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
  const query = 'SELECT * FROM user';
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error getting user:', error);
      callback(error);
      return;
    }
    console.log('User retrieved successfully');
    callback(null, results);
  });
};

// Get a user by ID
const getUserById = (usrid, callback) => {
  const query = 'SELECT * FROM user WHERE id = ?';
  connection.query(query, [usrid], (error, result) => {
    if (error) {
      console.error('Error getting user:', error);
      callback(error);
      return;
    }
    if (result.length === 0) {
      console.error('User not found');
      callback(new error('User not found'));
      return;
    }
    console.log('User retrieved successfully');
    callback(null, result[0]);
  });
};

// Update a user by ID
const updateUserById = (usrid, user, callback) => {
  const { name, email, psw } = user;
  const query = 'UPDATE user SET name = ?, email = ?, psw = ? WHERE id = ?';
  connection.query(query, [name, email, psw, usrid], (error, result) => {
    if (error) {
      console.error('Error updating user:', error);
      callback(error);
      return;
    }
    console.log('User updated successfully');
    callback(null, result);
  });
};

// Delete a user by ID
const deleteUserById = (usrid, callback) => {
  const query = 'DELETE FROM user WHERE id = ?';
  connection.query(query, [usrid], (error, result) => {
    if (error) {
      console.error('Error deleting user:', error);
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
      console.error('Error closing database connection:', error);
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