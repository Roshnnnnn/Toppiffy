import { useState, useEffect } from "react";
import Image1 from "../../assets/carousel1.webp";
import Image2 from "../../assets/carousel2.webp";
import Image3 from "../../assets/carousel3.webp";
import Image4 from "../../assets/carousel4.webp";
import image5 from "../../assets/Feastables.png";
import image6 from "../../assets/Hershey.png";
import image7 from "../../assets/Nestle.png";
import image8 from "../../assets/Whittaker.png";
import image9 from "../../assets/ferrero.png";
import image10 from "../../assets/Cadbury.png";
import {
  fetchAllProducts,
  filterChocolate,
} from "../redux/slices/productSlice";
import CardsDetail from "../features/CardsDetail";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import Trusted from "./Trusted";
import Testimonials from "./Testimonials";

const Header = () => {
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4];
  const brands = [
    { name: "Feastables", image: image5 },
    { name: "HERSHEYS", image: image6 },
    { name: "NESTLE", image: image7 },
    { name: "WHITTAKER", image: image8 },
    { name: "FERRERO", image: image9 },
    { name: "CADBURY", image: image10 },
  ];

  const visibleBrandCount = 3;
  const totalBrands = brands.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBrandIndex(
        (prevIndex) => (prevIndex + 1) % (totalBrands - visibleBrandCount + 1)
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const dispatch = useDispatch();
  const { brand } = useParams();

  const { products } = useSelector((state) => state.chocolates);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch, brand]);

  const handleFilter = (brandName) => {
    dispatch(filterChocolate(brandName));
  };

  return (
    <>
      <Helmet>
        <title>Home - ChocoKart</title>
        <meta
          name="description"
          content="Welcome to ChocoKart. Explore our delightful range of chocolates."
        />
      </Helmet>
      <header>
        <Navbar />
        <div className="w-full relative">
          <Link to="/product">
            <img
              src={images[0]}
              alt={`Brand ${currentBrandIndex + 1}`}
              className="w-full lg:h-[40rem] object-contain md:object-cover md:w-screen md:h-[25rem] sm:h-[19rem]"
            />
          </Link>
        </div>
        <div className="text-4xl justify-center text-center m-12">
          <div className="my-8">Top Brands</div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center my-0">
            {brands
              .slice(currentBrandIndex, currentBrandIndex + visibleBrandCount)
              .map((brand, index) => (
                <div key={index}>
                  <div className="justify-center items-center rounded border border-amber-600 hover:text-amber-600 ">
                    <Link to={`/${brand.name}`}>
                      <div
                        className="bg-white hover:bg-amber-500 p-4 text-sm cursor-pointer flex justify-center items-center h-[6rem]"
                        onClick={() => handleFilter(brand.name)}
                      >
                        <img
                          src={brand.image}
                          alt={`${brand.name} Brand`}
                          className="w-full h-[3rem] object-contain"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
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
        <div className="my-[2rem]">
          <Trusted />
        </div>
        <div className="my-[2rem]">
          <Testimonials />
        </div>
      </header>
    </>
  );
};

export default Header;
