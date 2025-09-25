import React, { useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    issue: '',
    municipality: '',
    location: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/complaints', {
        title: formData.issue,
        description: `Issue: ${formData.issue}, Name: ${formData.name}, Phone: ${formData.phone}, Municipality: ${formData.municipality}`,
        location: formData.location,
      });
      setMessage('Complaint submitted successfully!');
      setFormData({ name: '', age: '', phone: '', issue: '', municipality: '', location: '' });
    } catch (err) {
      setMessage('Error submitting complaint. Please try again.');
    }
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:06512211215";
    alert("Calling Ranchi Municipal Emergency... (Simulated)");
  };

  return (
    <div className="form-container">
      <h2>File a Complaint</h2>
      {message && <p style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Issue</label>
          <input type="text" name="issue" value={formData.issue} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Municipality Name</label>
          <input type="text" name="municipality" value={formData.municipality} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <button type="submit" className="button primary" style={{ width: '100%' }}>Submit Complaint</button>
      </form>
      <button className="emergency-button" onClick={handleEmergencyCall}>📞</button>
    </div>
  );
};

export default UserDashboard;