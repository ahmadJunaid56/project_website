import Image from 'next/image';

export default function ProductColors() {
  const colors = [
    { name: '668 Taclux SS Grain', image: '/diary (1).jpg' },
    { name: '663 Taclux SS Grain', image: '/diary (2).jpg' },
    { name: '662 Taclux SS Grain', image: '/diary (3).jpg' },
    { name: '669 Taclux SS Grain', image: '/diary (4).jpg' },
    { name: '670 Taclux SS Grain', image: '/diary (1).jpg' },
    { name: '671 Taclux SS Grain', image: '/diary (2).jpg' },
    { name: '672 Taclux SS Grain', image: '/diary (3).jpg' },
    { name: '673 Taclux SS Grain', image: '/diary (4).jpg' },
  ];

  return (
    <div className="containers mx-auto py-8">
      <h2 className="text-4xl lg:text-6xl font-bold mt-8 mb-8">Trending Sheets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden transition-shadow duration-300"
          >
            <Image
              src={color.image}
              alt={color.name}
              width={500}
              height={500}
              // layout="responsive"
              objectFit="cover"
            />
            <div className="py-1">
              <h3 className="text-lg font-semibold text-black font-sans">{color.name}</h3>
              <span className="text-sm text-gray-500">TACLUX, Taclux SS Grain</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
