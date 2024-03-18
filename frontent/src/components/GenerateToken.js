import React, { useState } from 'react';
import axios from 'axios'; // Import Axios for API requests

const GenerateToken = () => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleGenerateToken = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      // Make API request to generate password reset token
      const response = await axios.post('http://localhost:3000/auth/generate-reset-token', {
        email: email,
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
      <h2>Generate Password Reset Token</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <form onSubmit={handleGenerateToken}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Generate Token</button>
      </form>
    </div>
  );
};

export default GenerateToken;
