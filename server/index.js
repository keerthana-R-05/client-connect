// const express = require('express');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Hardcoded admin credentials
// const ADMIN_USERNAME = 'admin8765';
// const ADMIN_PASSWORD = '87654321';

// // In-memory data store for complaints
// let complaints = [];

// // API Routes

// // User submits a new complaint
// app.post('/api/complaints', (req, res) => {
//   const newComplaint = {
//     ...req.body,
//     id: complaints.length + 1,
//     status: 'Pending',
//     date: new Date().toLocaleDateString(),
//     time: new Date().toLocaleTimeString(),
//   };
//   complaints.push(newComplaint);
//   res.status(201).json({ success: true, message: 'Complaint submitted successfully!' });
// });

// // Admin login route
// app.post('/api/admin-login', (req, res) => {
//   const { username, password } = req.body;
//   if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
//     res.json({ success: true, message: 'Admin login successful' });
//   } else {
//     res.status(401).json({ success: false, message: 'Invalid credentials' });
//   }
// });

// // Get all complaints for the admin
// app.get('/api/admin/complaints', (req, res) => {
//   res.json(complaints);
// });

// // Admin updates a complaint status
// app.put('/api/admin/complaints/:id', (req, res) => {
//   const { id } = req.params;
//   const { status } = req.body;
//   const complaint = complaints.find(c => c.id === parseInt(id));

//   if (complaint) {
//     complaint.status = status;
//     res.json({ success: true, message: 'Status updated successfully' });
//   } else {
//     res.status(404).json({ success: false, message: 'Complaint not found' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Hardcoded admin credentials
const ADMIN_USERNAME = 'admin8765';
const ADMIN_PASSWORD = '87654321';

// In-memory data store for complaints
let complaints = [];

// API Routes

// User submits a new complaint
app.post('/api/complaints', (req, res) => {
  const newComplaint = {
    ...req.body,
    id: complaints.length + 1,
    status: 'Pending',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
  };
  complaints.push(newComplaint);
  res.status(201).json({ success: true, message: 'Complaint submitted successfully!' });
});

// Admin login route
app.post('/api/admin-login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ success: true, message: 'Admin login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Get all complaints for the admin
app.get('/api/admin/complaints', (req, res) => {
  res.json(complaints);
});

// Admin updates a complaint status
app.put('/api/admin/complaints/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const complaint = complaints.find(c => c.id === parseInt(id));

  if (complaint) {
    complaint.status = status;
    res.json({ success: true, message: 'Status updated successfully' });
  } else {
    res.status(404).json({ success: false, message: 'Complaint not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});