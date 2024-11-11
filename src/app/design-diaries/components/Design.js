"use client";
import { useState } from 'react';
import Image from 'next/image'; // Importing the Image component from Next.js

const Portfolio = () => {
  const [selectedClass, setSelectedClass] = useState("all");

  const handleClick = (category) => {  // Removed TypeScript type annotation ": string"
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

  return (
    <div className="p-6 pt-32 lg:px-12">
      <div className="flex mt-6">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">Design Diaries</h2>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 text-lg mb-8">
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
            <div key={index} className="mb-4">
              {/* Using Next.js Image component with lazy loading */}
              <Image
                src={image.src}
                alt="Design Image"
                width={500}   // Define a fixed width for images
                height={300}  // Define a fixed height for images
                className="w-full h-auto"
                loading="lazy" // Lazy loading
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
