import "./App.css";
import FilterSection from "./components/Cards/FilterSection";
import Header from "./components/HomePage/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CardsDetail from "./components/Cards/CardsDetail";

function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <FilterSection />
      <CardsDetail />
      <Footer />
    </>
  );
}

export default App;
