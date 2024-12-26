import React, { useState, useEffect } from "react";
import "../styles/homesection.css";

const HeroSection = () => {
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => setShowImage(true), 500); 
    const textTimer = setTimeout(() => setShowText(true), 1500); 
    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    };
  }, []);

  return (
    <div className="hero-section">
      {showImage && (
        <div className="hero-container">
          <img
            src="/images/code.jpeg"
            alt="Background"
            className="background-image"
          />
        </div>
      )}

      {showText && (
        <div className={`text-container ${showText ? "fade-in" : ""}`}>
          <h1>Mikel Jiménez</h1>
          <h2>Web Developer</h2>
          <p>Welcome to my portfolio</p>
        </div>
      )}
    </div>
  );
};

export default HeroSection;


