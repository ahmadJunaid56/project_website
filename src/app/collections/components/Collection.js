const CollectionSection = () => {
  return (
    <>
    <div>
      <h2 className="text-6xl pt-40 pl-10">Explore Collections</h2>
    </div>
    <div className="flex flex-col gap-12 mx-2  p-6">
      
      {/* Taclux Collection */}
      <div className="flex flex-col md:flex-row bg-gray-50 p-6">
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
        <div className="md:w-4/5 md:pl-6">
          <h2 className="text-4xl font-sans font-semibold mb-4">Taclux</h2>
          <p className="text-gray-700 text-justify mb-4">
            Discover the Taclux Collection, a curated selection of premium wood boards designed for the modern home. Each piece in this collection showcases KMI's commitment to quality, with luxurious textures and natural grain patterns that bring warmth and sophistication to any space.
          </p>
          <p className="text-gray-700 text-justify mb-6">
            Crafted to inspire creativity, the Taclux Collection offers versatile options ideal for accent walls, furniture, cabinetry, and unique decor elements. With its balance of durability and refined style, the Taclux Collection is perfect for those looking to make a statement in home interiors.
          </p>
          <button className="bg-green-600 text-white font-sans px-3 py-2">Explore Collection</button>
        </div>
      </div>

      {/* UV Collection */}
      <div className="flex flex-col md:flex-row-reverse bg-gray-50 p-6">
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
        <div className="md:w-4/5 md:pr-12">
          <h2 className="text-4xl font-sans font-semibold mb-4">UV</h2>
          <p className="text-gray-700 text-xl text-justify mb-4">
            Introducing the UV Collection by KMI, a line of premium wood boards designed with advanced UV coating technology for unmatched durability and vibrant finishes. Created to withstand the demands of modern living, each board in the UV Collection offers exceptional resistance to scratches, stains, and fading, maintaining its fresh, high-quality appearance over time.
          </p>
          <p className="text-gray-700 text-xl text-justify mb-6">
            The UV Collection is ideal for enhancing furniture, cabinetry, wall panels, and more. Add a touch of elegance and resilience to your spaces with the UV Collection.
          </p>
          <button className="bg-green-600 text-white px-3 py-2 font-sans">Explore Collection</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CollectionSection;
