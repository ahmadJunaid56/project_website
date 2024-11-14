"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className='pt-28 hero pb-12'>
      <div className="container">
        <div className="left-section">
          <h1>KMI <span className='text-[#665a48]'>Lasani Sheets</span> For Home Decor</h1>
          <h2>BRING NEW LIFE TO YOUR HOME -</h2>
          <div className='pt-4'>
            <Link href="/catalog">
              <span className="button bg-green-800">CATALOG</span>
            </Link>
            <Link href="/contact">
              <span className="button bg-green-800">CONTACT US</span>
            </Link>
          </div>
        </div>

        <div className="image-collage">
          <Image src="/image1.jpg" alt="Cool Cat" width={300} height={0} data-aos="fade-up" />
          <Image src="/image2.jpg" alt="Cool Cat" width={300} height={0} data-aos="zoom-out" />
          <Image src="/image3.jpg" alt="Cool Cat" width={300} height={0} data-aos="fade-up" />
          <Image src="/image4.jpg" alt="Cool Cat" width={300} height={0} data-aos="zoom-out" />
          <Image src="/image5.jpg" alt="Cool Cat" width={300} height={0} data-aos="fade-up" />
          <Image src="/image6.jpg" alt="Cool Cat" width={300} height={0} data-aos="zoom-out" />
        </div>
      </div>
    </div>
  );
}
