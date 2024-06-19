import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // Store user data in localStorage or send to a backend (for a real application)
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    navigate('/home'); // Redirect to the home screen
  };

  return (
    <div className="login-container">
      <h2>Jobizz</h2>
      <p>Welcome Back 👋</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Log In</button>
      </form>
      {/* Add social login buttons if needed */}
    </div>
  );
};

export default Login;