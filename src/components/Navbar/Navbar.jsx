import { useEffect, useState } from "react";
import { FaShoppingBag, FaRegUser } from "react-icons/fa";
import { GiChocolateBar } from "react-icons/gi";
import Image from "../../assets/logo.webp";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotalQuantity } from "../redux/slices/cartSlice";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
    { name: "CONTACT", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

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

  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalAmount);

  useEffect(() => {
    dispatch(calculateTotalQuantity());
  }, [dispatch]);

  return (
    <div className="sticky z-50 shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between sticky bg-white py-4 md:px-10 px-7">
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-amber-600 bg-white z-50 md:z-1 sm:z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in-out ${
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

          <li className="md:ml-8 text-xl md:my-0 my-7 mx-8 relative">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `mb-7 hover:text-gray-400 duration-500 ${
                  isActive ? "text-black" : "text-amber-600"
                }`
              }
            >
              <FaShoppingBag />
              {totalQuantity > 0 && (
                <span className="absolute -top-8 -right-2 bg-red-500 text-white px-1 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 mx-8 justify-center cursor-pointer relative">
            <button
              className="text-amber-600 font-semibold rounded inline-flex items-center"
              onClick={() => setDrop(!drop)}
            >
              <span className="mr-1">
                <FaRegUser />
              </span>
            </button>
            {drop && (
              <div className="absolute z-50 mt-2 lg:right-0 md:right-4 w-36 bg-white rounded-md shadow-lg">
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
