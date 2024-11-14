// components/Banner.js
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="bg-[#4d6b4f] text-center py-32 mt-16 px-4">
      <h2 className="text-4xl lg:text-6xl text-white font-light mb-4 tracking-wide" data-aos="fade-up">
        Wanna Decorate Your Home?
      </h2>
      <span className="text-gray-300 font-sans text-center text-xl lg:text-2xl mb-10 block" data-aos="fade-up">
        KMI vendors are available in 100+ cities <p className='text-gray-300 font-sans text-center text-xl lg:text-2xl mb-10 block' data-aos="fade-up">of Pakistan</p> 
      </span>
      <Link href="/vendors">
        <div className="bg-white text-green-900 px-4 py-3 text-lg font-sans font-medium shadow hover:bg-gray-200 cursor-pointer inline-block" data-aos="fade-up">
          Search our vendors
        </div>
      </Link>
    </div>
  );
}
