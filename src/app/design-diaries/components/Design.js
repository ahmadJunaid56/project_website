"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Portfolio = () => {
  const [selectedClass, setSelectedClass] = useState("all");

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true,    // Run animation only once
    });
  }, []);

  const handleClick = (category) => {
    setSelectedClass(category);
  };

  // Define images with categories for filtering
  const images = [
    { src: "/diary (1).jpg", categories: ["Living Room", "all"] },
    { src: "/diary (2).jpg", categories: ["Kitchen", "all"] },
    { src: "/diary (3).jpg", categories: ["Living Room", "all"] },
    { src: "/diary (4).jpg", categories: ["Kitchen", "all"] },
    { src: "/diary (1).jpg", categories: ["Living Room", "all"] },
    { src: "/diary (2).jpg", categories: ["Office", "all"] },
    { src: "/diary (1).jpg", categories: ["Living Room", "all"] },
    { src: "/diary (3).jpg", categories: ["Living Room", "all"] },
    { src: "/diary (2).jpg", categories: ["Office", "all"] },
  ];

  // Array of animations to cycle through for each image
  const animations = ["fade-up", "fade-down", "zoom-in", "zoom-out", "flip-left", "flip-right"];

  return (
    <div className="containers mx-auto pt-20">
      <div className="flex mt-8">
        <h2 className="text-4xl lg:text-6xl mt-8 font-bold mb-4">Design Diaries</h2>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          className={`px-4 py-2 font-sans ${selectedClass === "all" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 font-sans ${selectedClass === "Living Room" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => handleClick("Living Room")}
        >
          Living Room
        </button>
        <button
          className={`px-4 py-2 font-sans ${selectedClass === "Kitchen" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => handleClick("Kitchen")}
        >
          Kitchen
        </button>
        <button
          className={`px-4 py-2 font-sans ${selectedClass === "Office" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => handleClick("Office")}
        >
          Office
        </button>
      </div>

      {/* Grid layout with three columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images
          .filter(image => selectedClass === "all" || image.categories.includes(selectedClass))
          .map((image, index) => (
            <div
              key={index}
              className="mb-4"
              data-aos={animations[index % animations.length]} // Assign different animations to each image
            >
              {/* Using Next.js Image component with lazy loading */}
              <Image
                src={image.src}
                alt="Design Image"
                width={500}   // Define a fixed width for images
                height={300}  // Define a fixed height for images
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
