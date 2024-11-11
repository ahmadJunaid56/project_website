// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="pt-12 pb-4">
      <div className="mx-auto px-6 max-w-screen-xl grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo and Introduction */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-4xl font-bold mb-2">KMI Groups</h1>
        </div>

        {/* Sitemap Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold font-sans uppercase text-black mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/design-diaries" className="hover:text-black font-sans">Design Diaries</Link>
            </li>
            <li>
              <Link href="/sheets" className="hover:text-black font-sans">Sheets</Link>
            </li>
            <li>
              <Link href="/collections" className="hover:text-black font-sans">Collections</Link>
            </li>
            <li>
              <Link href="/vendors" className="hover:text-black font-sans">Vendors</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-black font-sans">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-black font-sans">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold font-sans uppercase text-black mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:text-black font-sans">Facebook</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black font-sans">LinkedIn</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black font-sans">Instagram</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-black font-sans">Twitter</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold font-sans uppercase text-black mb-4">Contact Us</h3>
          <p className="text-md text-green-900 font-bold">Head Office:</p>
          <p className="text-md text-black">Chanchal Wala Road, Near Sabz Mandi Jhang Road, Faisalabad.</p>
          <p className="text-md text-green-900 font-bold mt-2">Factory Address:</p>
          <p className="text-md text-black">2-KM, Jhang Bhakkar Road, Mankera</p>
          <p className="text-md text-green-900 font-bold mt-2">Phone: </p>
          <p className="font-normal text-black">+92-344-444-4446</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 flex justify-center mt-8 pt-4">
        <p className="text-black">
          © 2024 Kmi Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
