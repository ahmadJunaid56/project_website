// components/AboutUs.js
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <>
      <h2 className="text-4xl lg:text-6xl pt-8 mx-12 mb-4">About Us</h2>
      <section className="flex flex-col md:flex-row justify-between mx-6 text-justify mb-8 px-4">
        {/* Text Section */}
        <div className="flex-1 md:pl-0 pr-4 ">
          <p className="text-gray-600 mb-4">
            Our company stands at the forefront of interior design materials, specializing in the manufacturing of premium chipboard and laminated boards crafted to meet the demands of modern spaces. With a dedication to quality and innovation, we provide materials that blend strength with exceptional design, enabling designers and builders to achieve beautiful, enduring interiors. Our chipboard and laminated boards are engineered for durability, offering reliable solutions for high-traffic areas, cabinetry, furniture, and wall applications.
          </p>
          <p className="text-gray-600 mb-4">
            Available in a range of finishes and textures, our boards provide the versatility needed to complement any design style, from contemporary and minimalist to classic and sophisticated.
          </p>
          <button className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
            <Link href='/about'>
            More about us
            </Link>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 px-2 md:mt-0 md:w-[50%] h-auto">
          <Image
            src='/about.jpeg'
            alt="KMI Groups Design Patterns"
            width={680} // Adjust according to desired width
            height={400} // Adjust according to the text height
            // style={{ objectFit: 'cover' }}
          />
        </div>
      </section>
    </>

  );
};

export default AboutUs;
