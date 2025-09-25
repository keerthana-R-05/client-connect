import React from 'react';

const Contact = () => {
  return (
    <div className="card">
      <h2>Contact Us</h2>
      <p style={{ fontWeight: 'bold', color: 'var(--accent-teal)' }}>English:</p>
      <p>For emergencies or direct contact, please use the numbers below:</p>
      <ul>
        <li>Police Emergency: 100</li>
        <li>Fire Department: 101</li>
        <li>Medical Emergency: 102</li>
        <li>Ranchi Municipal: 0651-2211215</li>
      </ul>
      <p style={{ marginTop: '20px' }}>You can also reach us via email at contact@citizenconnect.in.</p>

      <p style={{ marginTop: '40px', fontWeight: 'bold', color: 'var(--accent-teal)' }}>Nagpuri / Sadri (Ranchi Language):</p>
      <p>आपातकालीन या सीधा संपर्क खातिर, नीचे देवल नंबर के उपयोग करब:</p>
      <ul>
        <li>पुलिस आपातकालीन: 100</li>
        <li>अग्नि विभाग: 101</li>
        <li>चिकित्सा आपातकालीन: 102</li>
        <li>रांची नगर निगम: 0651-2211215</li>
      </ul>
      <p style={{ marginTop: '20px' }}>आप हमरा से ईमेल में भी संपर्क कर सकब: contact@citizenconnect.in.</p>
    </div>
  );
};

export default Contact;