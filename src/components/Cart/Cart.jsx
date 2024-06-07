import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { selectIsLoggedIn } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "../features/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fireDB } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const totalQuantity = cart.reduce((total, item) => total + item.amount, 0);
  const totalAmount = cart.reduce((total, item) => total + item.totalPrice, 0);

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    var options = {
      key: "rzp_test_djWvraFPQUHHQR",
      key_secret: "pPH4I4hfWl9sgYvVSGOlPMN5",
      amount: parseInt(totalAmount * 100),
      currency: "USD",
      order_receipt: "order_rcptid_" + name,
      name: "ChocoKart",
      description: "for testing purpose",
      handler: function (response) {
        toast.success("Payment Successful");
        const paymentId = response.razorpay_payment_id;
        const orderInfo = {
          cart,
          addressInfo,
          date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }),
          paymentId,
        };

        try {
          addDoc(collection(fireDB, "orders"), orderInfo);
          handleEmptyCart();
        } catch (error) {
          console.log(error);
        }
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  const handleEmptyCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Helmet>
        <title>Shopping Cart - ChocoKart</title>
        <meta
          name="description"
          content="View and manage your shopping cart on ChocoKart. Review your selected toffees and chocolates before proceeding to checkout."
        />
      </Helmet>
      <div className="mt-10 mx-auto max-w-2xl text-amber-600 text-center">
        <p className="text-5xl font-semibold">
          <Link to="/">
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
                    className="flex flex-col md:flex-row items-center justify-between border-b-2 py-2"
                  >
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
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
                    <div className="flex items-center mt-2 md:mt-0">
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
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Empty Cart
                </button>
              </div>
            )}
          </section>
        </div>
        {cart.length > 0 && (
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
        )}
      </div>
    </>
  );
};

export default Cart;
