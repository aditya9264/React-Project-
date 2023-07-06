import React, { useState } from 'react';
import './RegistrationForm.css'; // Import the CSS file for styling

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Registration success
        const data = await response.json();
        console.log(data);
      } else {
        // Registration failed
        throw new Error('Registration failed');
      }
    } catch (error) {
      // Handle any errors, e.g., display an error message
      console.error(error);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;