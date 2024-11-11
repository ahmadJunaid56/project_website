"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import wood1 from "/public/image.jpg";

export default function CarouselComponent() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const cellCount = 5;
  const rotationInterval = 2000;
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Determine screen size and toggle autoplay accordingly
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay rotation for large screens only
  useEffect(() => {
    if (!isSmallScreen) {
      const interval = setInterval(() => {
        setSelectedIndex((prevIndex) => (prevIndex + 1) % cellCount);
      }, rotationInterval);
      return () => clearInterval(interval);
    }
  }, [isSmallScreen, cellCount]);

  // Calculate rotation based on index
  const rotateCarousel = () => {
    const angle = (selectedIndex / cellCount) * -360;
    return `translateZ(-275px) rotateY(${angle}deg)`;
  };

  // Manual navigation for small screens
  const handleNext = () => setSelectedIndex((prevIndex) => (prevIndex + 1) % cellCount);
  const handlePrev = () => setSelectedIndex((prevIndex - 1 + cellCount) % cellCount);

  return (
    <div className="wrapper">
      <div className="object">
        <div className="carousel" style={{ transform: rotateCarousel() }}>
          <div className="cell"><h3>COOL CAT</h3><Image src={wood1} alt="Cool Cat" width={300} height={400} id="image" /></div>
          <div className="cell"><h3 style={{ color: 'black' }}>COOL EYES</h3><Image src={wood1} alt="Cool Eyes" width={300} height={400} id="image" /></div>
          <div className="cell"><h3>LET'S GET WIRED</h3><Image src={wood1} alt="Let's Get Wired" width={300} height={400} id="image" /></div>
          <div className="cell"><h3>DEAD POOL</h3><Image src={wood1} alt="Dead Pool" width={300} height={400} id="image" /></div>
          <div className="cell"><h3>MOON</h3><Image src={wood1} alt="Moon" width={300} height={400} id="image" /></div>
        </div>
      </div>
      {isSmallScreen && (
        <div className="navigation text-black">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
}
