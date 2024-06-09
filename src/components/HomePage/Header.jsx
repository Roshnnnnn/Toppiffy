import { useState, useEffect } from "react";
import Image1 from "../../assets/carousel1.webp";
import Image2 from "../../assets/carousel2.webp";
import Image3 from "../../assets/carousel3.webp";
import Image4 from "../../assets/carousel4.webp";
import { fetchAllProducts } from "../redux/slices/productSlice";
import CardsDetail from "../features/CardsDetail";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import Trusted from "./Trusted";
import Testimonials from "./Testimonials";

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

  const { filterChocolate, products } = useSelector(
    (state) => state.chocolates
  );

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch, brand]);

  return (
    <>
      <Helmet>
        <title>Home - ChocoKart</title>
        <meta
          name="description"
          content="Welcome to ChocoKart. Explore our delightful range of toffees and chocolates."
        />
      </Helmet>
      <header>
        <Navbar />
        <div className="w-full">
          <Link to="/product">
            <img
              src={images[image]}
              alt={`Image ${image + 1}`}
              className="w-full lg:h-[40rem] object-contain md:object-cover md:w-screen md:h-[25rem] sm:h-[19rem]"
            />
          </Link>
        </div>
        <div className="text-4xl justify-center text-center m-12">
          <div className="my-8">Top Brands</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center my-0">
            {buttons.map((item, index) => {
              return (
                <div key={index}>
                  <section className="sm:p-8 md:p-8 lg:p-12 top-8 text-white border rounded">
                    <div className="justify-center items-center rounded border border-amber-600 hover:text-amber-600">
                      <Link to={`/${item}`}>
                        <div
                          className="bg-amber-600 hover:bg-white p-4 text-sm cursor-pointer"
                          onClick={() => dispatch(filterChocolate(item))}
                        >
                          {item}
                        </div>
                      </Link>
                    </div>
                  </section>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-4xl justify-center text-center m-8">
          <h2 className="my-8">Best Sellers</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="flex justify-center items-center my-0"
              >
                <CardsDetail item={item} brand={item.brand} id={item.id} />
              </div>
            ))}
          </div>
        </div>
        <div className="my-[2rem] ">
          <Trusted />
        </div>
        <div className="my-[2rem] ">
          <Testimonials />
        </div>
      </header>
    </>
  );
};

export default Header;
