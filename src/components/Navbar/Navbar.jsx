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
import { selectIsSpecialMember } from "../redux/slices/authSlice";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalAmount);
  const isSpecialMember = useSelector(selectIsSpecialMember);

  useEffect(() => {
    dispatch(calculateTotalQuantity());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("isSpecialMember");

    signOut(auth)
      .then(() => {
        toast.success("Logout Successful");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="sticky z-50 shadow-md w-full top-0 left-0">
      <nav className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="cursor-pointer flex items-center">
          <Link to="/">
            <img
              src={Image}
              alt="CocoKart Logo"
              className="w-[15rem]"
              width="300" // Set explicit width based on the actual size
              height="200" // Set explicit height based on the actual size
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 cursor-pointer md:hidden"
          style={{ top: "3.5rem" }}
        >
          <GiChocolateBar />
        </div>

        <ul
          className={`md:flex md:items-center absolute md:static text-amber-600 bg-white z-50 left-0 w-full md:w-auto transition-all duration-200 ease-in-out ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link, index) => (
            <li
              key={index}
              className="md:ml-8 lg:text-xl md:text-sm md:my-0 my-7 lg:mx-4 md:mx-2"
            >
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `hover:text-gray-400 duration-500 uppercase ${
                    isActive ? "text-black" : "text-amber-600"
                  }`
                }
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
              </NavLink>
            </li>
          ))}

          {isSpecialMember && (
            <li className="md:ml-8 lg:text-xl md:text-sm md:my-0 my-7 mx-8">
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-gray-400 duration-500 uppercase ${
                    isActive ? "text-black" : "text-amber-600"
                  }`
                }
              >
                DASHBOARD
              </NavLink>
            </li>
          )}

          <li className="md:ml-8 text-xl md:my-0 my-7 mx-8 relative w-[10%]">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `hover:text-gray-400 duration-500 ${
                  isActive ? "text-black" : "text-amber-600"
                }`
              }
            >
              <FaShoppingBag />
              {totalQuantity > 0 && (
                <span className="absolute -top-6 bg-red-500 text-white px-1 rounded-full">
                  {totalQuantity}
                </span>
              )}
            </NavLink>
          </li>

          <li className="md:ml-8 text-xl md:my-0 my-7 mx-8 relative">
            <button
              className="text-amber-600 font-semibold rounded inline-flex items-center"
              onClick={() => setDrop(!drop)}
              aria-label="User account options"
            >
              <FaRegUser />
            </button>
            {drop && (
              <div className="absolute z-50 mt-2 w-36 bg-white rounded-md shadow-lg">
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
      </nav>
    </div>
  );
};

export default Nav;
