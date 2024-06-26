import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { selectIsLoggedIn, selectUserId } from "../redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "../features/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db } from "../config/firebase";
import { addDoc, collection, doc } from "firebase/firestore";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userId = useSelector(selectUserId);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const altImage =
    "https://upload.wikimedia.org/wikipedia/commons/c/cd/Green_and_Black%27s_dark_chocolate_bar_2.jpg";

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPriceWithTaxes = useSelector(
    (state) => state.cart.totalPriceWithTaxes
  );
  const CGST = useSelector((state) => state.cart.CGST);
  const SGST = useSelector((state) => state.cart.SGST);
  const totalTax = useSelector((state) => state.cart.totalTax);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeFromCart({ id: productId }));
  };

  const buyNow = async () => {
    if (
      name === "" ||
      address === "" ||
      pincode === "" ||
      phoneNumber === "" ||
      city === "" ||
      state === ""
    ) {
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
      city,
      state,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    for (const key in addressInfo) {
      if (addressInfo[key] === undefined) {
        console.error(`Invalid data: ${key} is undefined`);
        toast.error("Failed to place the order. Invalid data.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
    }

    var options = {
      key: "rzp_test_djWvraFPQUHHQR",
      key_secret: "pPH4I4hfWl9sgYvVSGOlPMN5",
      amount: parseInt(totalPriceWithTaxes * 100),
      currency: "USD",
      order_receipt: "order_rcptid_" + name,
      name: "ChocoKart",
      description: "for testing purpose",
      handler: async function (response) {
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

        console.log("orderInfo:", orderInfo);

        try {
          const userRef = doc(db, "users", userId);
          const ordersCollectionRef = collection(userRef, "orders");

          const docRef = await addDoc(ordersCollectionRef, orderInfo);

          navigate(`/invoice/${docRef.id}`);
        } catch (error) {
          console.error("Error adding order to Firestore:", error);
          toast.error("Failed to place the order. Please try again.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      },
      modal: {
        ondismiss: function () {
          toast.error("Payment process was interrupted. Please try again.");
        },
      },
    };

    var pay = new window.Razorpay(options);

    pay.on("payment.failed", function (response) {
      if (response.error.reason === "international_cards_not_supported") {
        toast.error(
          "International cards are not supported. Please contact our support team for help.",
          {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          }
        );
      } else {
        toast.error("Payment failed. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    });

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
      {isLoggedIn ? (
        <div className="mt-10 mx-auto max-w-2xl text-amber-600 text-center">
          <p className="text-5xl font-semibold w-[4rem]">
            <Link to="/">
              <FaHandPointLeft />
            </Link>
          </p>
          <div className="container mx-auto mt-8 p-8 bg-white rounded shadow">
            <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
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
                          src={item.image || altImage}
                          alt={altImage}
                          className="w-14 h-14 object-cover rounded"
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
                      Total Quantity: {totalAmount}
                    </p>
                    <p className="text-lg font-semibold">
                      CGST: ${CGST.toFixed(2)}
                    </p>
                    <p className="text-lg font-semibold">
                      SGST: ${SGST.toFixed(2)}
                    </p>{" "}
                    <p className="text-lg font-semibold">
                      Total Tax: ${totalTax.toFixed(2)}
                    </p>
                    <p className="text-lg font-semibold">
                      Total Price ${totalPriceWithTaxes.toFixed(2)}
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
              city={city}
              state={state}
              setName={setName}
              setAddress={setAddress}
              setPincode={setPincode}
              setPhoneNumber={setPhoneNumber}
              setCity={setCity}
              setState={setState}
              buyNow={buyNow}
            />
          )}
        </div>
      ) : (
        <p>Please log in to view your cart.</p>
      )}
    </>
  );
};

export default Cart;
