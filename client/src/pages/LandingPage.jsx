import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = ({ setIsUserLoggedIn, setUsername }) => {
  const [username, setUsernameInput] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserLogin = (e) => {
    e.preventDefault();
    // Simulate user login
    if (username && password) {
      localStorage.setItem('userLoggedIn', 'true');
      localStorage.setItem('userProfile', JSON.stringify({ name: username }));
      setIsUserLoggedIn(true);
      setUsername(username);
      navigate('/home');
    } else {
      alert("Please enter a username and password.");
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <form onSubmit={handleUserLogin}>
        <div className="input-group">
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsernameInput(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="button primary" style={{ width: '100%' }}>Login</button>
      </form>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Are you an admin? <a href="/admin-login" style={{ color: 'var(--accent-teal)', fontWeight: 'bold' }}>Click here</a></p>
      </div>
    </div>
  );
};

export default LandingPage;