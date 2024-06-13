import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { Watch } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="#924D3A"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          <ToastContainer />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
