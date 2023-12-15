import { useState } from "react";

const ImageGallery = () => {
  return (
    <div className="flex">
      {/* Fixed filter section */}
      <div className="fixed left-0 top-0 h-full w-[15rem] bg-gray-200 p-4">
        {/* Brand filter */}
        <div className="my-[3rem]">
          <h2 className="text-lg font-bold mb-4 text-center">Brand</h2>
          <div className="items-center m-auto ml-[3rem]">
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Whittakar's
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Brand 2
            </label>
            <label className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              Brand 3
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Brand 4
            </label>
          </div>
        </div>

        {/* Sorting options */}
        <div>
          <h2 className="text-lg font-bold mb-2 text-center">Sort By</h2>
          <div className="items-center m-auto">
            <h2 className="text-lg font-bold mb-2 text-center">Price</h2>
            <div className="items-center m-auto ml-[3rem]">
              <label className="flex items-center mb-2">
                <input type="radio" className="mr-2" />
                Low To High
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" className="mr-2" />
                High to low
              </label>
            </div>
          </div>
          <div className="items-center m-auto">
            <h2 className="text-lg font-bold mb-2 text-center">
              Alphabetically
            </h2>
            <div className="items-center m-auto ml-[3rem]">
              <label className="flex items-center mb-2">
                <input type="radio" className="mr-2" />A to Z
              </label>
              <label className="flex items-center mb-2">
                <input type="radio" className="mr-2" />Z to A
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-30rem p-4">
        {/* Your existing image gallery content goes here */}
      </div>
    </div>
  );
};

export default ImageGallery;
