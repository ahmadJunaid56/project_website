"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className='pt-28 hero py-10'>
      <div className="container">
        <div className="left-section pr-16">
          <h1>KMI Lasani Sheets For Home Decor</h1>
          <h2>BRING NEW LIFE TO YOUR HOME -</h2>
          <div>
            <Link href="/catalog">
              <span className="button bg-green-800">CATALOG</span>
            </Link>
            <Link href="/contact">
              <span className="button bg-green-800">CONTACT US</span>
            </Link>
          </div>
        </div>

        <div className="image-collage">
          <Image src="/image.jpeg" alt="Cool Cat" width={300} height={0} data-aos="fade-up" />
          <Image src="/images1.jpg" alt="Cool Cat" width={300} height={0} data-aos="fade-down" />
          <Image src="/images2.jpeg" alt="Cool Cat" width={300} height={0} data-aos="fade-up" />
          <Image src="/images1.jpg" alt="Cool Cat" width={300} height={0} data-aos="fade-down" />
          <Image src="/images2.jpeg" alt="Cool Cat" width={300} height={0} data-aos="fade-up" />
          <Image src="/images1.jpg" alt="Cool Cat" width={300} height={0} data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
}
