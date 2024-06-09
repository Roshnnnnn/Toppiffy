import "./App.css";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
