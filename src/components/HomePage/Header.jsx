import { useState, useEffect } from "react";
import Image1 from "../../assets/carousel1.webp";
import Image2 from "../../assets/carousel2.webp";
import Image3 from "../../assets/carousel3.webp";
import Image4 from "../../assets/carousel4.webp";
import Image5 from "../../assets/hershey.webp";
import Image6 from "../../assets/Nestle.webp";
import Image7 from "../../assets/Whittakars.webp";
import { filterChocolate } from "../redux/slices/productSlice";
import CardsDetail from "../features/CardsDetail";
import data from "../../data.json";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const Header = () => {
  const [image, setImage] = useState(0);
  const images = [Image1, Image2, Image3, Image4];
  const buttons = ["HERSHEYS", "NESTLE", "WHITTAKER"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [image]);

  const dispatch = useDispatch();
  const { brand } = useParams();

  useEffect(() => {
    dispatch(filterChocolate(brand));
  }, [dispatch, brand]);

  return (
    <div>
      <Navbar />
      <div className="w-full">
        <img
          src={images[image]}
          alt={`Image ${image + 1}`}
          className="w-full lg:h-[40rem] object-contain md:object-cover md:w-screen md:h-[25rem] sm:h-[19rem]"
        />
      </div>
      <div className="text-4xl justify-center text-center m-12">
        <div className="my-8">Top Brands</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center my-0">
          {buttons.map((item, index) => {
            return (
              <div key={index}>
                <div className="sm:p-8 md:p-8 lg-p-12 top-8 text-white  border rounded">
                  <div className="justify-center items-center rounded border border-amber-600  hover:text-amber-600">
                    <Link to={`/filteredProducts/${item}`}>
                      <div
                        className="bg-amber-600 hover:bg-white"
                        onClick={() => dispatch(filterChocolate(item))}
                      >
                        {item}
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-4xl justify-center text-center m-8">
        <h2 className="my-8">Best Sellers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* {data.slice(0, 3).map((item, index) => (
            <div key={index}>
              <CardsDetail item={item} />
            </div>
          ))} */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Header;
