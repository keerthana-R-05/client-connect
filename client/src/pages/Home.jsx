import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '/src/assets/hero.png'; // Path to your hero image

const Home = () => {
  const blogPosts = [
    {
      title: "Ranchi's Cleanliness Drive: A Collective Effort",
      content: "The city of Ranchi is launching a new cleanliness initiative. Citizen reports are crucial for identifying key areas needing attention.",
      image: "https://images.unsplash.com/photo-1517457210986-778393589b31?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Improving Road Infrastructure in Jharkhand",
      content: "Jharkhand's government is prioritizing road repair and maintenance. Report potholes and damaged roads to contribute to safer travel.",
      image: "https://images.unsplash.com/photo-1549488344-9c864293f773?q=80&w=1470&auto=format&fit=crop"
    },
    {
      title: "Citizen Engagement: The Key to a Smart City",
      content: "Active citizen participation is vital for building a smart, responsive city. Our platform empowers you to be a part of this transformation.",
      image: "https://images.unsplash.com/photo-1542845607-2c1b92019a86?q=80&w=1470&auto=format&fit=crop"
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <img src={heroImage} alt="Cityscape background" />
        <div className="hero-overlay">
          <h1 style={{ fontSize: '3rem' }}>Citizen Connect</h1>
          <p style={{ fontSize: '1.5rem', marginTop: '10px' }}>Your Voice, Your City, Your Change.</p>
        </div>
      </div>

      <div className="home-content-section">
        <p className="home-content">
          Citizen Connect is a platform dedicated to empowering the residents of Jharkhand to report civic issues seamlessly.
          By providing real-time feedback, you empower municipal bodies to act faster and more efficiently.
        </p>
        <Link to="/complaints">
          <button className="button primary">Submit a Complaint</button>
        </Link>
        
        <div className="blog-section">
          {blogPosts.map((blog, index) => (
            <div key={index} className="blog-card">
              <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
              <h4>{blog.title}</h4>
              <p>{blog.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;