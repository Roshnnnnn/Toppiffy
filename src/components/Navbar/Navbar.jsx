import { FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";
import Image from "../../assets/logo.webp";

const Navbar = () => {
  return (
    <header className="relative w-full">
      <nav className="bg-white z-6 text-amber-800 w-full">
        <div className="flex items-center justify-center bg-white">
          <div className="flex-grow-0 w-200">
            <img src={Image} alt="" className="w-[20rem] ml-20" />
          </div>
          <div className="flex items-center w-[40rem] justify-center">
            <ul className="flex justify-center flex-wrap list-none mx-10 w-full text-xl">
              <li className="static mb-1 mx-8">
                <a href="/">Home</a>
              </li>
              <li className="static mb-1 mx-8">
                <a href="/product">Product</a>
              </li>
              <li className="static mb-1 mx-8">
                <a href="/about">About</a>
              </li>
              <li className="static mb-1 mx-8">
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="flex justify-between text-xl">
            <div className="flex items-center mx-12">
              <div className="mx-4">
                <a href="/">
                  <FaSearch />
                </a>
              </div>
              <div className="mx-4">
                <a href="/">
                  <FaRegUser />
                </a>
              </div>
              <div className="mx-4">
                <a href="/">
                  <FaShoppingBag />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
