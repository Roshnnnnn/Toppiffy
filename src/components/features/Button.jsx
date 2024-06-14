import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Button = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    try {
      if (!product.images?.image) {
        throw new Error("Product image is undefined");
      }

      console.log("Product data:", product);
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
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Error adding to cart");
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 sm:py-2 sm:px-6 rounded text-sm"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default Button;
