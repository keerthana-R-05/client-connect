import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://citizen-connect-api-e52n.onrender.com/api/admin-login', { username, password });
      if (response.data.success) {
        localStorage.setItem('isAdminLoggedIn', 'true');
        navigate('/admin-dashboard');
      }
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="button primary" style={{ width: '100%' }}>Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;