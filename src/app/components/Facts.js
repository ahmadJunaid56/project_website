// components/Banner.js
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-[#4a6448] text-center py-32 mt-8 px-4">
      <h2 className="text-6xl text-white font-light mb-4 tracking-wide">
        Wanna Decorate Your Home?
      </h2>
      <span className="text-gray-300 font-sans text-center text-2xl mb-10 block">
        KMI vendors are available in 100+ cities <p className='text-gray-300 font-sans text-center text-2xl mb-10 block'>of Pakistan</p> 
      </span>
      <Link href="/vendors">
        <div className="bg-white text-green-900 px-4 py-3 rounded-md font-sans font-medium shadow hover:bg-gray-200 cursor-pointer inline-block">
          Search our vendors
        </div>
      </Link>
    </div>
  );
}
