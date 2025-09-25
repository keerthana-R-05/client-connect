import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Complaints from './pages/Complaints';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import LandingPage from './pages/LandingPage';
import { useState, useEffect } from 'react';

function App() {
  const [username, setUsername] = useState('Guest');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const userStatus = localStorage.getItem('userLoggedIn');
    if (userStatus === 'true') {
      setIsUserLoggedIn(true);
      const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
      if (savedProfile && savedProfile.name) {
        setUsername(savedProfile.name);
      }
    }
  }, []);

  return (
      <Router basename={import.meta.env.DEV ? '/' : '/client-connect'}> 
      <Navbar username={username} isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage setIsUserLoggedIn={setIsUserLoggedIn} setUsername={setUsername} />} />
          <Route path="/home" element={<Home />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/profile" element={<UserProfile setUsername={setUsername} />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;