'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProductColors() {
  const colors = [
    { id: '668', name: '668 Taclux SS Grain', category: 'Wood', image: '/diary (1).jpg' },
    { id: '662', name: '662 Taclux SS Grain', category: 'Stone', image: '/diary (2).jpg' },
    { id: '663', name: '663 Taclux SS Grain', category: 'Metal', image: '/diary (3).jpg' },
    { id: '661', name: '661 Taclux SS Grain', category: 'Wood', image: '/diary (4).jpg' },
    { id: '665', name: '665 Taclux SS Grain', category: 'Wood', image: '/diary (1).jpg' },
    { id: '666', name: '666 Taclux SS Grain', category: 'Wood', image: '/diary (2).jpg' },
    { id: '667', name: '667 Taclux SS Grain', category: 'Wood', image: '/diary (3).jpg' },
    { id: '669', name: '669 Taclux SS Grain', category: 'Wood', image: '/diary (4).jpg' },
    { id: '670', name: '670 Taclux SS Grain', category: 'Wood', image: '/diary (1).jpg' },
    { id: '671', name: '671 Taclux SS Grain', category: 'Wood', image: '/diary (2).jpg' },
    { id: '672', name: '672 Taclux SS Grain', category: 'Wood', image: '/diary (3).jpg' },
    { id: '673', name: '673 Taclux SS Grain', category: 'Wood', image: '/diary (4).jpg' },
    // Add more color objects as needed...
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredColors = colors.filter((color) => {
    return (
      (selectedCategory === '' || color.category === selectedCategory) &&
      (searchTerm === '' || color.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const openModal = (color) => setModalData(color);
  const closeModal = () => setModalData(null);

  return (
    <div className="containers mx-auto pt-32 py-8">
      <h2 className="text-4xl lg:text-6xl font-bold mt-8 mb-8">Explore Sheets</h2>

      {/* Category Dropdown and Search Bar */}
      <div className="flex justify-between mb-4">
        <select
          className="border font-sans text-xl border-gray-300 px-6 py-3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Wood">Wood</option>
          <option value="Metal">Metal</option>
          <option value="Stone">Stone</option>
        </select>
        <div>
          <input
            type="text"
            placeholder="Search by name or code"
            className="border border-gray-300 p-2 mr-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-red-900 text-white uppercase font-sans p-2">Search</button>
        </div>
      </div>

      {/* Displaying Filtered Colors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredColors.map((color) => (
          <div
            key={color.id}
            className="bg-white overflow-hidden transition-shadow duration-300 cursor-pointer"
            onClick={() => openModal(color)}
          >
            <Image
              src={color.image}
              alt={color.name}
              width={500}
              height={500}
              objectFit="cover"
            />
            <div className="py-1">
              <h3 className="text-lg font-semibold text-black font-sans">{color.name}</h3>
              <span className="text-sm text-gray-500">TACLUX, {color.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 relative flex flex-col md:flex-row gap-6 z-90 overflow-hidden"
            style={{ maxWidth: '95%', width: '1300px' }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 text-2xl z-70 p-2 mt-8 bg-gray-200 rounded-full hover:bg-gray-300"
              aria-label="Close Modal"
            >
              ✕
            </button>


            <div className="flex justify-center items-center w-full md:w-1/2">
              <Image
                src={modalData.image}
                alt={modalData.name}
                layout="responsive"
                width={1000} // Set to match modal width for responsive scaling
                height={1000}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            <div className="flex flex-col max-w-full px-4 md:px-0 w-full md:w-1/2">
              <h3 className="text-3xl font-sans font-semibold mb-2">{modalData.name}</h3>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {modalData.category.split(', ').map((tag, index) => (
                  <span key={index} className="bg-gray-200 text-gray-600 text-sm font-sans px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h4 className="text-xl font-sans font-bold mb-2">Description</h4>
              {/* Description */}
              <p className="text-gray-600 mb-4 text-justify">
                Transform your spaces with the premium elegance of {modalData.name}, a high-quality board crafted by KMI. Designed to bring both durability and aesthetic appeal, this board boasts a sleek, soft-touch finish with a refined grain texture that complements any decor style, from modern minimalism to classic warmth.
              </p>
              <p className="text-gray-600 mb-4">
                Made to elevate interiors, it's more than just a board—it's a statement piece for any room.
              </p>

              {/* Available Colors */}
              <div className="mt-4">
                <h4 className="text-xl font-sans font-semibold mb-2">Available colors</h4>
                <div className="flex gap-2 mb-8">
                  <Image src="/image.jpg" alt="Color sample 1" width={50} height={50} className="w-14 h-32 object-cover" />
                  <Image src="/image.jpg" alt="Color sample 2" width={50} height={50} className="w-14 h-32 object-cover" />
                  <Image src="/image.jpg" alt="Color sample 3" width={50} height={50} className="w-14 h-32 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
