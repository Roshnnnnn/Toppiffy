import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        amount: 1,
        totalPrice: product.price,
        image: product.images.image,
      })
    );
    toast.success("Added to cart");
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default Button;
