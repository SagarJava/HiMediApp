import React from 'react';
import './splash.css'; // Add custom styles

const SplashPage: React.FC = () => {
  return (
    <div className="splash-container">
      <h1 className="logo">Himedi.</h1>
      <p className="tagline">Simplifying Healthcare, One Step at a Time</p>
    </div>
  );
};

export default SplashPage;
