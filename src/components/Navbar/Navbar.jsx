import { useState } from "react";
import Image from "../../assets/logo.webp";
import {
  FaHamburger,
  FaShoppingBag,
  FaSearch,
  FaRegUser,
} from "react-icons/fa";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
    { name: <FaSearch />, link: "/search" },
    { name: <FaRegUser />, link: "/user" },
    { name: <FaShoppingBag />, link: "/cart" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <img src={Image} alt="" className="w-[15rem]" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FaHamburger name={open ? "close" : "menu"} />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
