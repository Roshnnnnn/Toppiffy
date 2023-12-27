// import FilterSection from "../features/FilterSection";
// import CardsDetail from "../features/CardsDetail";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { Link } from "react-router-dom";
// import data from "../../data.json";
// import { filterChocolate } from "../redux/slices/productSlice";

// const ProductList = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="mt-4">
//         <FilterSection />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[6rem] my-[6rem]">
//           {data.map((item, index) => (
//             <div key={index} className="">
//               <div key={index} className="flex justify-center items-center">
//                 <Link to={`/filteredProducts/${item.id}`}>
//                   <CardsDetail
//                     item={item}
//                     onClick={() => filterChocolate(item)}
//                   />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductList;

import { useEffect } from "react";
import { singleProduct } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { id } = useParams();
  console.log(id, "params");

  const dispatch = useDispatch();
  useEffect(() => {
    const action = singleProduct(id);
    dispatch(action);
  }, [dispatch, id]);

  const chocolate = useSelector((state) => state.chocolates?.singleProduct);
  console.log(chocolate);

  return <div>ProductList</div>;
};

export default ProductList;
