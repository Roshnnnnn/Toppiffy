import "./App.css";
import FilterSection from "./components/features/FilterSection";
import Header from "./components/HomePage/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CardsDetail from "./components/features/CardsDetail";
import ProductList from "./components/Product/ProductList";
import ProductDetails from "./components/Product/ProductDetails";
import Login from "./components/Profile/Login";
import { Route, Routes } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <FilterSection /> */}
      {/* <ProductList /> */}
      {/* <ProductDetails /> */}

      <Login />

      {/* <Footer /> */}
    </>
  );
}

export default App;
