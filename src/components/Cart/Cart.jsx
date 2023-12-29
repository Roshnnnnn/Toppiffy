import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
import { addDoc, fireDB } from "../config/firebase";

const Cart = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  const handleProceed = () => {
    console.log("Proceed button clicked");
  };

  const totalQuantity = cart.reduce((total, item) => total + item.amount, 0);
  const totalAmount = cart.reduce((total, item) => total + item.totalPrice, 0);

  const buyNow = async () => {};

  return (
    <div className="mt-10 ml-10 transform -translate-x-1 -translate-y-1 text-amber-600 text-center">
      <p className="text-5xl font-semibold">
        <Link to={"/"}>
          <FaHandPointLeft />
        </Link>
      </p>
      <div className="container mx-auto my-8 p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <section>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
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
                    <p className="text-gray-700 mr-4">
                      Quantity: {item.amount}
                    </p>
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
          )}
        </section>

        {/* Total and Pay Now Section */}
        <section className="mt-8">
          {cart.length > 0 && (
            <div>
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  Total Quantity: {totalQuantity}
                </p>
                <p className="text-lg font-semibold">
                  Total Amount: ${totalAmount.toFixed(2)}
                </p>
              </div>
              <button
                onClick={handleEmptyCart}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
              >
                Empty Cart
              </button>
              <button
                onClick={handleProceed}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                <Link to={"/checkout"}>Pay Now</Link>
              </button>
            </div>
          )}
        </section>
      </div>
      <Modal
        name={name}
        address={address}
        pincode={pincode}
        phoneNumber={phoneNumber}
        setName={setName}
        setAddress={setAddress}
        setPincode={setPincode}
        setPhoneNumber={setPhoneNumber}
        buyNow={buyNow}
      />
    </div>
  );
};

export default Cart;
