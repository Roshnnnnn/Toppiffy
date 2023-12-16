import "./App.css";
import FilterSection from "./components/features/FilterSection";
import Header from "./components/HomePage/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CardsDetail from "./components/features/CardsDetail";
import ProductList from "./components/Product/ProductList";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      {/* <FilterSection /> */}
      {/* <ProductList /> */}

      <Footer />
    </>
  );
}

export default App;
