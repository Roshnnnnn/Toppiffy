// CartItem.jsx

import React, { useState } from "react";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-4 justify-between">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover"
      />
      <div>
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-500">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={handleDecrease}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={handleIncrease}
          className="bg-gray-200 px-2 py-1 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
