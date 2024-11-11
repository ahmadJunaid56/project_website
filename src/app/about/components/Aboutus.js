// components/AboutUs.js
import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <h2 className="text-6xl pt-32 mx-12 mb-4">About Us</h2>
      <div className="relative max-w-[95%] h-[300px] mx-auto"> {/* Adjust height as needed */}
        <Image
          src='/diary (1).jpg'
          alt="KMI Groups Design Patterns"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-gray-600 mb-4 mx-8 text-justify mt-10">
        Our company stands at the forefront of interior design materials, specializing in the manufacturing of premium chipboard and laminated boards crafted to meet the demands of modern spaces. With a dedication to quality and innovation, we provide materials that blend strength with exceptional design, enabling designers and builders to achieve beautiful, enduring interiors. Our chipboard and laminated boards are engineered for durability, offering reliable solutions for high-traffic areas, cabinetry, furniture, and wall applications. Available in a range of finishes and textures, our boards provide the versatility needed to complement any design style, from contemporary and minimalist to classic and sophisticated.
      </p>
      <p className="text-gray-600 text-lg mb-4 text-justify mx-8">
        We pride ourselves on a commitment to sustainability and quality control, ensuring that each product not only meets industry standards but also reflects our dedication to eco-friendly practices. Through rigorous testing and refined manufacturing processes, we guarantee consistency and precision in every board we produce. Our goal is to inspire creativity while delivering lasting value, making us a trusted partner for architects, interior designers, and contractors. Choose our materials for interior projects that require both beauty and resilience, and experience how our chipboard and laminated boards can elevate any space to new heights
      </p>
      <h2 className='font-sans font-bold text-4xl mx-8 mb-4'>Why KMI </h2>
      <p className="text-gray-600 text-lg mb-4 text-justify mx-8">People choose our company’s products for their exceptional quality, durability, and stylish design options, making them ideal for a variety of interior applications. Our chipboard and laminated boards are meticulously crafted to withstand daily wear, ensuring longevity even in high-traffic areas. With a wide range of finishes, textures, and colors, our products offer versatility to match any design vision, from sleek modern to timeless classic styles. Additionally, our commitment to sustainable practices means that our materials are eco-friendly, responsibly sourced, and meet industry standards. For architects, designers, and contractors, our products are a trusted choice for reliable, beautiful, and resilient interiors.</p>
      <div className="flex flex-col md:flex-row gap-8 justify-between mx-6 text-justify px-2">
        <div className="mission">
          <h2 className='font-sans font-bold text-3xl'>Mission</h2>
          <p className='text-justify'>Our mission is to enhance interior spaces by providing high-quality, innovative, and sustainable materials that empower designers, architects, and builders to bring their creative visions to life. We are dedicated to manufacturing chipboard and laminated boards that combine durability, aesthetic appeal, and versatility, meeting the demands of modern interior design with precision and excellence. Through our commitment to quality and continuous improvement, we strive to exceed customer expectations by delivering materials that not only withstand time but also inspire the creation of beautiful, functional spaces. Our mission extends beyond just products; it includes building lasting partnerships and supporting sustainable practices that contribute to a better, eco-friendly future.</p>
        </div>
        <div className="mission">
          <h2 className='font-sans font-bold text-3xl'>Vision</h2>
          <p className='text-justify'>Our vision is to become a global leader in the interior design materials industry, known for our innovation, sustainability, and commitment to quality. We aim to be the preferred choice for interior designers, architects, and builders seeking materials that are both reliable and transformative. By pushing the boundaries of product design and embracing environmentally responsible practices, we envision a future where our products set the standard for beauty, resilience, and eco-consciousness in interior spaces. Through ongoing research, development, and collaboration, we are dedicated to shaping the future of interiors with products that inspire, uplift, and bring lasting value to our customers and the communities they serve.</p>
        </div>
      </div>
      <div>
        <h2 className='font-sans font-bold mx-8'>KMI Values</h2>
        <p className='text-gray-600 text-lg mb-4 text-justify mx-8'>Our company is built upon a strong foundation of core values that guide every aspect of our work and define who we are as a trusted partner in interior design materials.</p>
      </div>
      <div className='bg-[#fff4e3] font-sans p-2 mx-8'>
        <h2 className='font-bold text-xl'>Quality</h2>
        <p className='text-lg text-justify'>is at the heart of our values. We believe in creating materials that stand the test of time, with craftsmanship and attention to detail that ensures lasting reliability and aesthetic appeal. We uphold the highest standards to deliver durable, premium products that our customers can trust for their most ambitious projects.</p>
      </div>
      <div className='bg-[#fff4e3] font-sans p-2 mx-8 mt-4'>
        <h2 className='font-bold text-xl'>Innovation</h2>
        <p className='text-lg text-justify'> drives our approach. We are committed to staying at the forefront of the industry by continually developing new products, designs, and techniques that respond to the evolving needs of interior designers, architects, and builders. This commitment enables us to deliver materials that are not only functional but also inspiring, helping our clients bring unique and modern spaces to life.</p>
        <p className='text-justify text-lg'>We prioritize sustainability, taking meaningful steps to reduce our environmental impact and promote eco-friendly practices. Our materials are responsibly sourced, and we integrate sustainable practices across our production processes. We are dedicated to making a positive difference for the planet and contributing to a future where beautiful interiors are built responsibly.</p>
      </div>
      <div className='bg-[#fff4e3] font-sans p-2 mx-8 mt-4'>
        <h2 className='font-bold text-xl'>Integrity</h2>
        <p className='text-lg text-justify'>is essential to our operations and interactions. We value transparency, honesty, and accountability, and we build trust by upholding our commitments to our clients, employees, and partners. This approach fosters long-lasting, mutually respectful relationships that we deeply value.</p>
        <p className='text-lg text-justify'>is essential to our operations and interactions. We value transparency, honesty, and accountability, and we build trust by upholding our commitments to our clients, employees, and partners. This approach fosters long-lasting, mutually respectful relationships that we deeply value.

          Finally, we are committed to customer satisfaction. We believe that every client deserves attentive, responsive service, and we go above and beyond to meet their needs. Our goal is to support their creative visions with reliable products, expert guidance, and exceptional service that ensures a smooth, rewarding experience.</p>
      </div>
    </>
  );
};

export default AboutUs;
