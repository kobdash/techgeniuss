import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API requests

const PasswordReset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    // Validate password, confirm password, and token
    if (!password || !confirmPassword || !token) {
      setErrorMessage('Please enter a password, confirm password, and token.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      // Make API request to reset password
      const response = await axios.post('http://localhost:3000/auth/reset-password', {
        password_reset_token: token,
        new_password: password,
      });

      setSuccessMessage(response.data.message); // Show success message
      setErrorMessage(''); // Clear error message
    } catch (error) {
      setErrorMessage(error.response.data.message || 'An error occurred.'); // Show error message
      setSuccessMessage(''); // Clear success message
    }
  };

  return (
    <div>
      <h2>Password Reset</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handlePasswordReset}>
        <label htmlFor="token">Password Reset Token:</label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
