import React from 'react';

const About = () => {
  return (
    <div className="card">
      <h2>About Citizen Connect</h2>
      <p>
        <span style={{ fontWeight: 'bold', color: 'var(--accent-teal)' }}>English:</span> This application is designed to help citizens of Jharkhand (Ranchi) easily report civic issues to the relevant authorities. Our goal is to create a seamless communication channel that promotes transparency and efficiency in local governance.
      </p>
      <p style={{ marginTop: '20px' }}>
        <span style={{ fontWeight: 'bold', color: 'var(--accent-teal)' }}>Nagpuri / Sadri (Ranchi Language):</span> ई एप्लीकेशन झारखंड (रांची) केर नागरिक मनक लेल बनावल गेलो आहे ताकि उमन आसानी से अपन शहर केर समस्या मन के अधिकारी तक पहुँचा सकें। हमर लक्ष्य आहे की एगो सुगम तरीका से सरकार और जनता केर बीच संबंध बना सकें।
      </p>
    </div>
  );
};

export default About;