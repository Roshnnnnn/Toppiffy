import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import data from "../../data.json";
import CardsDetail from "../features/CardsDetail";

const ProductList = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow mt-2">
        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center my-0"
              >
                <CardsDetail item={item} brand={item.brand} id={item.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
