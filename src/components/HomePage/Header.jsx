import { useState, useEffect } from "react";
import Image1 from "../../assets/carousel1.webp";
import Image2 from "../../assets/carousel2.webp";
import Image3 from "../../assets/carousel3.webp";
import Image4 from "../../assets/carousel4.webp";
import Card from "../Cards/Cards";
import Image5 from "../../assets/hershey.webp";
import Image6 from "../../assets/Nestle.webp";
import Image7 from "../../assets/Whittakars.webp";
import Image8 from "../../assets/cadbury.webp";

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
      <div className="text-4xl justify-center text-center my-6">
        <div>Top Brands</div>
        <div className=" w-full h-[30rem] flex justify-center items-center space-x-12">
          <Card image={Image5} />
          <Card image={Image6} />
          <Card image={Image7} />
          <Card image={Image8} />
        </div>
      </div>
      <div className="text-4xl justify-center text-center my-6">
        <div>Best Sellers</div>
      </div>
    </div>
  );
};

export default Header;
