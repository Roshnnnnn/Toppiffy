import "./index.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loader from "./components/features/Loader";
import { useDispatch } from "react-redux";
import { initializeCartFromFirestore } from "./components/redux/slices/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    dispatch(initializeCartFromFirestore());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
};

export default App;
