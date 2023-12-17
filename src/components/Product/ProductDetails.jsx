import React from "react";
import data from "../../data.json";

const ProductDetails = () => {
  return (
    <div className="m-12">
      <div className="">
        {data.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
