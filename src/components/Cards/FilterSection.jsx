// import React from "react";

// const FilterSection = () => {
//   return (
//     <div className="justify-between items-center w-[20rem] h-screen p-4 bg-gray-200">
//       <div className="justify-center m-auto w-full bg-slate-600 h-[20rem]">
//         <div className="flex items-center m-auto w-[15rem] h-[15rem] bg-black flex-col justify-center">
//           <div className="text-white text-2xl mb-4">Brand</div>
//           <div className="flex items-center justify-between">
//             <input type="checkbox" id="checkbox1" />
//             <label htmlFor="checkbox1">Option 1</label>
//           </div>
//           <div className="flex items-center justify-between">
//             <input type="checkbox" id="checkbox2" />
//             <label htmlFor="checkbox2">Option 2</label>
//           </div>
//         </div>
//         <div className=""></div>
//       </div>
//       <div className="flex items-center"></div>
//     </div>
//   );
// };

// export default FilterSection;

import { useState } from "react";

const ImageGallery = () => {
  const [brands, setBrands] = useState({
    brand1: false,
    brand2: false,
    brand3: false,
    brand4: false,
  });

  const handleBrandChange = (brand) => {
    setBrands((prevBrands) => ({ ...prevBrands, [brand]: !prevBrands[brand] }));
  };

  const handleSortChange = (sortOption) => {
    // Handle sorting logic here
    console.log("Sorting option selected:", sortOption);
  };

  return (
    <div className="flex">
      {/* Fixed filter section */}
      <div className="fixed left-0 top-0 h-full w-30rem bg-gray-200 p-4">
        {/* Brand filter */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 text-center">Brand</h2>
          <div className="items-center m-auto">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={brands.brand1}
                onChange={() => handleBrandChange("brand1")}
                className="mr-2"
              />
              Brand 1
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={brands.brand2}
                onChange={() => handleBrandChange("brand2")}
                className="mr-2"
              />
              Brand 2
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={brands.brand3}
                onChange={() => handleBrandChange("brand3")}
                className="mr-2"
              />
              Brand 3
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={brands.brand4}
                onChange={() => handleBrandChange("brand4")}
                className="mr-2"
              />
              Brand 4
            </label>
          </div>
        </div>

        {/* Sorting options */}
        <div>
          <h2 className="text-lg font-bold mb-2">Sort By</h2>
          <select
            onChange={(e) => handleSortChange(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="priceHighToLow">Price High to Low</option>
            <option value="priceLowToHigh">Price Low to High</option>
            <option value="alphabeticalAZ">Alphabetical A to Z</option>
            <option value="alphabeticalZA">Alphabetical Z to A</option>
          </select>
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
