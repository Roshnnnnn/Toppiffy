import { useState } from "react";
import { FaShoppingBag, FaSearch, FaRegUser } from "react-icons/fa";
import { GiChocolateBar } from "react-icons/gi";
import Image from "../../assets/logo.webp";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const [term, setTerm] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Done");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSearch = () => {
    setSearchBar(!searchBar);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
  };

  return (
    <div className="shadow-md w-full sticky top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <Link to="/">
            <img src={Image} alt="" className="w-[15rem]" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <GiChocolateBar name={open ? "close" : "menu"} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-amber-600  bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in-out ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 text-xl md:my-0 my-7 mx-8">
              <NavLink
                to={link.link}
                key={index}
                className={({ isActive }) =>
                  ` hover:text-gray-400 duration-500 ${
                    isActive ? "text-black" : "text-amber-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <div className="relative">
            <li
              className="md:ml-8 text-xl md:my-0  my-7 mx-8 cursor-pointer"
              onClick={handleSearch}
            >
              <FaSearch />
            </li>
            {searchBar && (
              <div className="flex md:absolute lg:top-[5rem] lg:-left-[15rem] lg:w-[30rem] md:w-[20rem] md:top-[5rem] sm:-top-[1rem] md:-left-[4rem] bg-white p-2 focus:outline-none transition-all duration-500 ease-in-out opacity-100 delay-100">
                <form onSubmit={submitHandler}>
                  <div className="relative flex">
                    <input
                      type="text"
                      value={term}
                      onChange={(e) => {
                        setTerm(e.target.value);
                      }}
                      className="lg:w-[28rem] p-2 rounded focus:outline-none pl-16"
                      placeholder="Search your favourite"
                    />
                    <span className="absolute inset-y-0 left-4 flex items-center pl-3">
                      <FaSearch onClick={handleSearch} />
                    </span>
                  </div>
                </form>
              </div>
            )}
          </div>

          <li className="md:ml-8 text-xl md:my-0 my-7 mx-8">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                ` mb-7 hover:text-gray-400 duration-500 ${
                  isActive ? "text-black" : "text-amber-600"
                }`
              }
            >
              <FaShoppingBag />
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 mx-8 justify-center cursor-pointer">
            <button
              className="text-amber-600 font-semibold rounded inline-flex items-center"
              onClick={() => setDrop(!drop)}
            >
              <span className="mr-1">
                <FaRegUser />
              </span>
            </button>
            {drop && (
              <div className="absolute z-10 mt-2 right-0 w-36 bg-white rounded-md shadow-lg">
                {auth.currentUser ? (
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
