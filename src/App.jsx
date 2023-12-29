import { useSelector } from "react-redux";
import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  console.log("Cart", cart);
  console.log("totalAmount", totalAmount);
  console.log("toatalPrice", totalPrice);

  return (
    <>
      <ToastContainer />
      <Outlet />
    </>
  );
}

export default App;
