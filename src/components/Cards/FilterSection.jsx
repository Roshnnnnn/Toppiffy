import React from "react";

const FilterSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 mx-12 bg-gray-200">
      <select className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2">
        <option value="">All Brands</option>
        <option value="brand1">Brand 1</option>
        <option value="brand2">Brand 2</option>
        <option value="brand3">Brand 3</option>
        <option value="brand4">Brand 4</option>
      </select>

      <select className="p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2">
        <option value="">Price</option>
        <option value="lowToHigh">Low to High</option>
        <option value="highToLow">High to Low</option>
      </select>

      <select className="p-2 border border-gray-300 rounded">
        <option value="">Alphabetical</option>
        <option value="aToZ">A to Z</option>
        <option value="zToA">Z to A</option>
      </select>
    </div>
  );
};

export default FilterSection;
