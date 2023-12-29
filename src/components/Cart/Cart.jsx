import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handleProceed = () => {
    // Add your logic for handling the "Proceed" button click
    console.log("Proceed button clicked");
  };

  return (
    <div className="container mx-auto my-8 p-8 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b-2 py-2"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-gray-700 mr-4">Quantity: {item.amount}</p>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={handleEmptyCart}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Empty Cart
            </button>
            <button
              onClick={handleProceed}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
              <Link to={"/checkout"}>Proceed</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
