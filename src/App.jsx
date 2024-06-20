import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Loader from "./components/features/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <ToastContainer />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
