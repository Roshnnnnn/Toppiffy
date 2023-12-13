import { useState, useEffect } from "react";
import Image1 from "../../assets/carousel1.webp";
import Image2 from "../../assets/carousel2.webp";
import Image3 from "../../assets/carousel3.webp";
import Image4 from "../../assets/carousel4.webp";

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
          className="w-screen h-full"
        />
      </div>
      <div className="text-4xl justify-center text-center my-6">
        <div>Top Brands</div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
