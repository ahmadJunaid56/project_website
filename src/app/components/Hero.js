import Link from 'next/link';

export default function Home() {
  return (
    <div className='pt-32 hero py-10'>
      <div className="container">
        <div className="left-section">
          <h1>KMI Lasani Sheets For Home Decor</h1>
          <h2>BRING NEW LIFE TO YOUR HOME -</h2>
          <div>
            <Link href="/catalog">
              <span className="button">VENDORS</span>
            </Link>
            <Link href="/contact">
              <span className="button">CONTACT US</span>
            </Link>
          </div>
        </div>

        <div className="container1">
          <div className="gallery-wrap">
            <div className="item item-1"></div>
            <div className="item item-2"></div>
            <div className="item item-3"></div>
            <div className="item item-4"></div>
            <div className="item item-5"></div>
            <div className="item item-6"></div>
            <div className="item item-7"></div>
            <div className="item item-8"></div>

          </div>
        </div>


      </div>
    </div>
  );
}
