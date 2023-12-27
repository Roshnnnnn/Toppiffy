import FilterSection from "../features/FilterSection";
import CardsDetail from "../features/CardsDetail";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import data from "../../data.json";
import { filterChocolate } from "../redux/slices/productSlice";

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <div>
        <FilterSection />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[6rem] my-[6rem]">
          {data.map((item, index) => (
            <div key={index} className="">
              <div key={index} className="flex justify-center items-center">
                <Link to={`/product-details/${item.id}`}>
                  <CardsDetail
                    item={item}
                    onClick={() => filterChocolate(item)}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
