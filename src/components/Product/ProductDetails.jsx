// import { useState } from "react";
import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

// const ProductDetails = ({ product }) => {
//   const [images, setImages] = useState({
//     img1: "https://images.pexels.com/photos/2027041/pexels-photo-2027041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     img2: "https://images.pexels.com/photos/4791303/pexels-photo-4791303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//   });

//   const [activeImg, setActiveImg] = useState(images.img1);
//   const [count, setCount] = useState(1);
//   const [showData1, setShowData1] = useState(false);
//   const [showData2, setShowData2] = useState(false);

//   const increment = () => {
//     if (count < 10) {
//       setCount(count + 1);
//     }
//   };

//   const decrement = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     }
//   };

//   const toggleData1 = () => {
//     setShowData1(!showData1);
//     setShowData2(false); // Hide other data if visible
//   };

//   const toggleData2 = () => {
//     setShowData2(!showData2);
//     setShowData1(false); // Hide other data if visible
//   };

//   const dispatch = useDispatch();

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col justify-between lg:flex-row p-4 gap-16 lg:items-center">
//         <div className="flex flex-col gap-6 lg:w-2/4">
//           <img
//             src={activeImg}
//             alt=""
//             className="w-full h-full aspect-square object-cover rounded-xl"
//           />
//           <div className="flex flex-row justify-center h-24 gap-12">
//             <img
//               src={images.img2}
//               alt=""
//               className="w-24 h-24 rounded-md cursor-pointer"
//               onClick={() => setActiveImg(images.img2)}
//             />
//             <img
//               src={images.img1}
//               alt=""
//               className="w-24 h-24 rounded-md cursor-pointer"
//               onClick={() => setActiveImg(images.img1)}
//             />
//           </div>
//         </div>
//         <div className="flex flex-col gap-4 lg:w-2/4">
//           <div>
//             <span className="text-amber-700 font-semibold text-2xl">
//               Product Name
//             </span>
//             <h1 className="text-5xl ">{product} </h1>
//           </div>
//           <h3 className="text-3xl">Description</h3>
//           <p className="text-gray-600">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
//             perferendis, ab odit temporibus delectus nesciunt asperiores quaerat
//             blanditiis rerum sint cupiditate, dolorem cum assumenda minima
//             voluptatem culpa vitae aperiam! Illum!
//           </p>
//           <div className="p-4 ">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={toggleData1}
//             >
//               ingredients
//             </button>
//             {showData1 && (
//               <div className="mt-4">
//                 <p>hello, hi, 123, 1234</p>
//               </div>
//             )}
//           </div>
//           <div className="p-4 ">
//             <button
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               onClick={toggleData2}
//             >
//               nutritions
//             </button>
//             {showData2 && (
//               <div className="mt-4">
//                 <p>hello, hi, 123, 1234</p>
//               </div>
//             )}
//           </div>
//           <h3 className="text-xl font-semibold">$ price</h3>
//           <div className="flex flex-row items-center gap-12">
//             <div className="flex flex-row items-center">
//               <button
//                 className="bg-gray-200 py-4 px-5 rounded-lg text-amber-900 text-3xl"
//                 onClick={decrement}
//               >
//                 -
//               </button>
//               <span className="py-4 px-6 rounded-lg">{count}</span>
//               <button
//                 className="bg-gray-200 py-4 px-5 rounded-lg text-amber-900 text-3xl"
//                 onClick={increment}
//               >
//                 +
//               </button>
//             </div>
//             <button
//               className="bg-amber-300 text-emerald-800 hover:bg-amber-700 hover:text-white font-semibold py-3 px-16 rounded-xl transition-colors duration-300 h-full"
//               onClick={addToCart}
//             >
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;

const ProductDetails = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <div className="container mx-auto">
              <div className="flex justify-center items-center">
                <img
                  src={item.images.image}
                  alt="Product"
                  className="w-64 h-64"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-500">{item.description}</p>
                <p className="text-lg font-bold mt-2">${item.price}</p>
              </div>
              <div className="flex justify-center items-center mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => dispatch(addToCart(items))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      =
    </div>
  );
};

export default ProductDetails;
