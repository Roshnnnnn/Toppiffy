// CartPage.jsx

import React from "react";
import CartItem from "./CartItem"; // Adjust the path based on your project structure

const items = [
  {
    id: 1,
    name: "Item 1",
    image: "path/to/item1.jpg",
    price: 20.99,
    quantity: 1,
  },
  // Add more items as needed
];

const CartPage = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartPage;
