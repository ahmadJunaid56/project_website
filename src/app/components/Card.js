// components/Cards.js
"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTools, FaCube, FaPaintBrush, FaRulerCombined } from 'react-icons/fa';

export default function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true,     // Run animation only once
    });
  }, []);

  const cards1 = [
    {
      title: "Materials",
      description: "A premium KMI sheet features a durable MDF core with a sleek, scratch-resistant finish, ideal for stylish cabinetry and modern interiors.",
      icon: <FaTools />,
    },
    {
      title: "Durability",
      description: "KMI sheets offer high density and durability, providing a solid, impact-resistant surface ideal for heavy-duty applications in modern interiors.",
      icon: <FaCube />,
    },
    {
      title: "Designs",
      description: "Modern LMDF sheet designs feature sleek finishes, vibrant colors, and realistic wood textures, perfect for stylish, contemporary interior applications.",
      icon: <FaPaintBrush />,
    },
    {
      title: "Structure",
      description: "KMI's sheets have a consistent structure, ensuring uniform density and stability, which enhances durability and precision for smooth, reliable installations.",
      icon: <FaRulerCombined />,
    },
  ];

  // Array of animations to apply to each card
  const animations = ["fade-up", "fade-down"];

  return (
    <div className="flex justify-center mt-10 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[95%] w-full px-4">
        {cards1.map((card, index) => (
          <div
            key={index}
            className="bg-gray-100 border border-gray-200 p-8 shadow-md flex flex-col items-center text-center font-serif"
            data-aos={animations[index % animations.length]} // Assign different animation to each card
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-green-800 rounded-full text-green-800 text-3xl bg-gray-50">
              {card.icon}
            </div>
            <h3 className="text-2xl text-black font-semibold mb-3">{card.title}</h3>
            <p className="text-black text-justify leading-7">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
