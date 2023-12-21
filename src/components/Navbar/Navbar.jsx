// import { useState } from "react";
// import Image from "../../assets/logo.webp";
// import { FaHamburger, FaShoppingBag, FaSearch } from "react-icons/fa";
// import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
// import { Link, NavLink } from "react-router-dom";

// const Nav = () => {
//   let Links = [
//     { name: "HOME", link: "/" },
//     { name: "PRODUCT", link: "/product" },
//     { name: "CONTACT", link: "/contact" },
//     { name: <FaSearch />, link: "/search" },
//     { name: <RiLoginBoxFill />, link: "/login" },
//   ];
//   let [open, setOpen] = useState(false);
//   let cartAmount = 0;

//   return (
//     <div className="shadow-md w-full sticky top-0 left-0">
//       <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
//         <div className="cursor-pointer flex items-center">
//           <Link to="/">
//             <img src={Image} alt="" className="w-[15rem]" />
//           </Link>
//         </div>

//         <div
//           onClick={() => setOpen(!open)}
//           className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
//         >
//           <FaHamburger name={open ? "close" : "menu"} />
//         </div>
//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? "top-20" : "top-[-490px]"
//           }`}
//         >
//           {Links.map((link, index) => (
//             <li key={index} className="md:ml-8 text-xl md:my-0 my-7 mx-8">
//               <NavLink
//                 to={link.link}
//                 key={index}
//                 className={({ isActive }) =>
//                   ` hover:text-gray-400 duration-500 ${
//                     isActive ? "text-black" : "text-amber-600"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             </li>
//           ))}
//           <span className="inline-flex items-center rounded-md -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
//             {cartAmount}
//           </span>
//           <li className="md:ml-8 text-xl md:my-0 my-7 mx-8">
//             <NavLink
//               to="/cart"
//               className={({ isActive }) =>
//                 ` mb-7 hover:text-gray-400 duration-500 ${
//                   isActive ? "text-black" : "text-amber-600"
//                 }`
//               }
//             >
//               <FaShoppingBag />
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import { useState } from "react";
import Image from "../../assets/logo.webp";
import { FaHamburger, FaShoppingBag, FaSearch } from "react-icons/fa";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
    { name: "CONTACT", link: "/contact" },
    { name: <FaSearch />, link: "/search" },
  ];
  let [open, setOpen] = useState(false);
  let cartAmount = 0;
  let isLoggedIn = false; // Set this to true if the user is logged in

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
          <FaHamburger name={open ? "close" : "menu"} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
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
          <span className="inline-flex items-center rounded-md -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            {cartAmount}
          </span>
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
          <li className="md:ml-8 text-xl md:my-0 my-7 mx-8">
            {isLoggedIn ? (
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  ` mb-7 hover:text-gray-400 duration-500 ${
                    isActive ? "text-black" : "text-amber-600"
                  }`
                }
              >
                <RiLogoutBoxFill />
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  ` mb-7 hover:text-gray-400 duration-500 ${
                    isActive ? "text-black" : "text-amber-600"
                  }`
                }
              >
                <RiLoginBoxFill />
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
