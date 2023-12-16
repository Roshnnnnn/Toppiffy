import React from "react";
import FilterSection from "../Cards/FilterSection";
import CardsDetail from "../Cards/CardsDetail";
import data from "../../data.json";

const ProductList = () => {
  return (
    <div>
      <FilterSection />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-3">
        {data.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <CardsDetail item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
