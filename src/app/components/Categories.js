import Image from 'next/image';

export default function TopCategories() {
  const categories = [
    {
      name: 'Taclux',
      image: '/images3.jpeg', // Replace with your actual image path
    },
    {
      name: 'UV',
      image: '/images2.jpeg', // Replace with your actual image path
    },
  ];

  return (
    <div className="containers mx-auto ">
      <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-8 mb-8">
        Top Collections
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="relative flex flex-col text-center">
            
            {/* Image Container */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[450px]"> {/* Adjust height at different screen sizes */}
              <Image
                src={category.image}
                alt={category.name}
                layout="fill" // Use fill to cover the parent div
                objectFit="cover" // Ensure the image covers the div
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div> {/* Overlay */}
            </div>

            {/* Text Overlay */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
