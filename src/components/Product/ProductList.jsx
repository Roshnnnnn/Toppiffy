import FilterSection from "../features/FilterSection";
import CardsDetail from "../features/CardsDetail";
import data from "../../data.json";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div>
        <FilterSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 my-3">
          {data?.map((item, index) => (
            <div key={index} className="flex justify-center items-center">
              <Link to={`/product-details/${item.id}`}>
                <CardsDetail item={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
