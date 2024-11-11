"use client";
import { useState } from 'react';

const Portfolio = () => {
  const [selectedClass, setSelectedClass] = useState("all");

  const handleClick = (category) => {
    setSelectedClass(category);
  };

  // Define images with categories for filtering
  const images = [
    { src: "diary (1).jpg", categories: ["Living Room", "all"] },
    { src: "diary (2).jpg", categories: ["Kitchen", "all"] },
    { src: "diary (3).jpg", categories: ["Living Room", "all"] },
    { src: "diary (4).jpg", categories: ["Kitchen", "all"] },
    { src: "diary (1).jpg", categories: ["Living Room", "all"] },
    { src: "diary (2).jpg", categories: ["Office", "all"] },
    { src: "diary (1).jpg", categories: ["Living Room", "all"] },
    { src: "diary (3).jpg", categories: ["Living Room", "all"] },
    { src: "diary (2).jpg", categories: ["Office", "all"] },
  ];

  return (
    <div className="p-6 pt-8 lg:px-12">
      <div className="flex mt-6">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">Design Diaries</h2>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          className={`px-4 py-2 font-sans rounded-md ${selectedClass === "all" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => handleClick("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 font-sans rounded-md ${selectedClass === "Living Room" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => handleClick("Living Room")}
        >
          Living Room
        </button>
        <button
          className={`px-4 py-2 font-sans rounded-md ${selectedClass === "Kitchen" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
          onClick={() => handleClick("Kitchen")}
        >
          Kitchen
        </button>
        <button
          className={`px-4 py-2 font-sans rounded-md ${selectedClass === "Office" ? "bg-brown text-white" : "bg-gray-200 text-gray-700"}`}
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
              <img src={image.src} alt="" className="w-full h-auto" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
