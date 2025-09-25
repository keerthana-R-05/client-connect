import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminLoggedIn) {
      navigate('/admin-login');
      return;
    }
    fetchComplaints();
  }, [navigate]);

  const fetchComplaints = async () => {
    try {
      const response = await axios.get('https://citizen-connect-api-e52n.onrender.com/api/admin/complaints');
      setComplaints(response.data);
    } catch (err) {
      console.error('Failed to fetch complaints:', err);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`https://citizen-connect-api-e52n.onrender.com/api/admin/complaints/${id}`, { status });
      fetchComplaints();
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Pending': return 'status-pending';
      case 'In Progress': return 'status-inprogress';
      case 'Resolved': return 'status-resolved';
      default: return '';
    }
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Admin Dashboard</h2>
        <button onClick={() => { localStorage.removeItem('isAdminLoggedIn'); navigate('/admin-login'); }} className="button secondary">Logout</button>
      </div>
      {complaints.length === 0 ? (
        <p>No complaints have been submitted yet.</p>
      ) : (
        complaints.map(complaint => (
          <div key={complaint.id} className="card">
            <h3>{complaint.title}</h3>
            <p><strong>Details:</strong> {complaint.description}</p>
            <p><strong>Location:</strong> {complaint.location}</p>
            <p><strong>Date:</strong> {complaint.date} | <strong>Time:</strong> {complaint.time}</p>
            <p>
              <strong>Status:</strong> <span className={`status-badge ${getStatusClass(complaint.status)}`}>{complaint.status}</span>
            </p>
            <div style={{ marginTop: '10px' }}>
              <button
                className="button"
                style={{ backgroundColor: '#1c768f', marginRight: '10px' }}
                onClick={() => updateStatus(complaint.id, 'In Progress')}
              >
                Set In Progress
              </button>
              <button
                className="button"
                style={{ backgroundColor: '#04a150' }}
                onClick={() => updateStatus(complaint.id, 'Resolved')}
              >
                Set Resolved
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;