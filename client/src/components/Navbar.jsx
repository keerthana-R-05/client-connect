import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ username, isUserLoggedIn, setIsUserLoggedIn }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userProfile');
    setIsUserLoggedIn(false);
    setMenuOpen(false); // Close menu on logout
    navigate('/');
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
        <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Citizen Connect</div>
      </Link>
      <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <div className={`nav-links-container ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-links" style={{ marginRight: '20px' }}>
          <li><Link to="/home" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/complaints" onClick={handleLinkClick}>Complaints</Link></li>
          <li><Link to="/profile" onClick={handleLinkClick}>Profile</Link></li>
          <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        </ul>
        {isUserLoggedIn ? (
          <>
            <span className="welcome-text">Welcome, {username}!</span>
            <button onClick={handleLogout} className="button secondary">Logout</button>
          </>
        ) : (
          <Link to="/" onClick={handleLinkClick}>
            <button className="button secondary">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;