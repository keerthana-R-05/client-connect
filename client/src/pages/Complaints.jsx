import React, { useState } from 'react';
import axios from 'axios';

const Complaints = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    issue: '',
    municipality: '',
    district: '',
    state: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://citizen-connect-api-e52n.onrender.com/api/complaints', {
        title: formData.issue,
        description: `Name: ${formData.name}, Age: ${formData.age}, Phone: ${formData.phone}, Municipality: ${formData.municipality}, District: ${formData.district}, State: ${formData.state}`,
        location: `${formData.municipality}, ${formData.district}, ${formData.state}`,
      });
      setMessage('Complaint submitted successfully!');
      setFormData({ name: '', age: '', phone: '', issue: '', municipality: '', district: '', state: '' });
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
          <label>District</label>
          <input type="text" name="district" value={formData.district} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>State</label>
          <input type="text" name="state" value={formData.state} onChange={handleChange} required />
        </div>
        <button type="submit" className="button primary" style={{ width: '100%' }}>Submit Complaint</button>
      </form>
      <button className="emergency-button" onClick={handleEmergencyCall}>📞</button>
    </div>
  );
};

export default Complaints;