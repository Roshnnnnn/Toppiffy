// import { FaRegUser, FaSearch, FaShoppingBag } from "react-icons/fa";
// import Image from "../../assets/logo.webp";

// const Navbar = () => {
//   const Link = [
//     // { name: Image, link: "/" },
//     { name: "Home", link: "/" },
//     { name: "Product", link: "/product" },
//     { name: "About", link: "/about" },
//     { name: "Contact", link: "/contact" },
//   ];
//   return (
//     <header className="relative w-full">
//       <nav className="bg-white z-6 text-amber-800 w-full top-0">
//         <div className="md:flex md:items-center justify-center bg-white h-[5rem]">
//           <div className="flex-grow-0">
//             <a href="/">
//               <img src={Image} alt="" className="w-[15rem] m-8" />
//             </a>
//           </div>

//           {Link.map((item, index) => (
//             <div
//               key={index}
//               className="md:flex md:items-center w-[20rem] justify-center hover:text-black duration-500"
//             >
//               <ul className="flex justify-center flex-wrap list-none mx-10 w-full text-xl">
//                 <li className="static mb-1 mx-8">
//                   <a href="/">{item.name}</a>
//                 </li>
//               </ul>
//             </div>
//           ))}

//           <div className="flex justify-between text-xl">
//             <div className="flex items-center mx-12">
//               <div className="mx-4">
//                 <a href="/search">
//                   <FaSearch />
//                 </a>
//               </div>
//               <div className="mx-4">
//                 <a href="/profile">
//                   <FaRegUser />
//                 </a>
//               </div>
//               <div className="mx-4">
//                 <a href="/cart">
//                   <FaShoppingBag />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import Image from "../../assets/logo.webp";
import { FaHamburger } from "react-icons/fa";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
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
