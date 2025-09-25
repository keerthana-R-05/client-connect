import React, { useState, useEffect } from 'react';

const UserProfile = ({ setUsername }) => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
    phone: '',
    gender: '',
    municipality: '',
    district: '',
    state: '',
    photo: null,
  });
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
      setIsNewUser(false);
      if (savedProfile.name) {
        setUsername(savedProfile.name);
      }
    }
  }, [setUsername]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, photo: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    if (profile.name) {
      setUsername(profile.name);
    }
    alert("Profile updated successfully!");
    setIsNewUser(false);
  };

  return (
    <div className="card profile-container">
      <h2>Your Profile</h2>
      {isNewUser && <p style={{ color: 'var(--accent-teal)' }}>Please update your profile information.</p>}
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="input-group" style={{ textAlign: 'center' }}>
          <label>Profile Photo</label>
          <img src={profile.photo || "https://via.placeholder.com/150"} alt="Profile" className="profile-avatar" />
          <input type="file" onChange={handlePhotoUpload} />
        </div>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" value={profile.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input type="number" name="age" value={profile.age} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={profile.phone} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <select name="gender" value={profile.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="input-group">
          <label>Municipality Name</label>
          <input type="text" name="municipality" value={profile.municipality} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>District</label>
          <input type="text" name="district" value={profile.district} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>State</label>
          <input type="text" name="state" value={profile.state} onChange={handleChange} required />
        </div>
        <button type="submit" className="button primary" style={{ width: '100%' }}>Update Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;