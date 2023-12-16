import { useState, useEffect } from "react";
import Image1 from "../../assets/carousel1.webp";
import Image2 from "../../assets/carousel2.webp";
import Image3 from "../../assets/carousel3.webp";
import Image4 from "../../assets/carousel4.webp";
import Card from "../features/Cards";
import Image5 from "../../assets/hershey.webp";
import Image6 from "../../assets/Nestle.webp";
import Image7 from "../../assets/Whittakars.webp";
import CardsDetail from "../features/CardsDetail";
import data from "../../data.json";

const Header = () => {
  const [image, setImage] = useState(0);
  const images = [Image1, Image2, Image3, Image4];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [image]);

  return (
    <div>
      <div className="w-full">
        <img
          src={images[image]}
          alt={`Image ${image + 1}`}
          className="w-screen h-[40rem]"
        />
      </div>
      <div className="text-4xl justify-center text-center m-12">
        <div className="my-8">Top Brands</div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card image={Image5} />
          <Card image={Image6} />
          <Card image={Image7} />
        </div>
      </div>
      <div className="text-4xl justify-center text-center m-12">
        <h2 className="my-8">Best Sellers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.slice(0, 3).map((item, index) => (
            <div key={index}>
              <CardsDetail item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
