import Card from "../features/Cards";
import Image5 from "../../assets/hershey.webp";
import Image6 from "../../assets/Nestle.webp";
import Image7 from "../../assets/Whittakars.webp";
import CardsDetail from "../features/CardsDetail";
import data from "../../data";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <Slider />
      </div>
      <div className="text-4xl justify-center text-center m-12">
        <div className="my-8">Top Brands</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[8rem]">
          <Link to={"/product"}>
            <Card image={Image5} />
          </Link>
          <Link to={"/product"}>
            <Card image={Image6} />
          </Link>
          <Link to={"/product"}>
            <Card image={Image7} />
          </Link>
        </div>
      </div>
      <div className="text-4xl justify-center text-center m-8">
        <h2 className="my-8">Best Sellers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.slice(0, 3).map((item, index) => (
            <div key={index}>
              <CardsDetail item={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Header;
