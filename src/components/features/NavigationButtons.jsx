// import React from "react";
// import { Button } from "@material-tailwind/react";
// import { filteredProducts } from "../redux/slices/productSlice";
// import { useDispatch } from "react-redux";

// const NavigationButtons = () => {
//   const chocolates = ["CADBURY", "FERRERO", "WHITTAKER"];
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <div className="flex items-center justify-center py-8">
//         {chocolates.map((item, index) => (
//           <div key={index} className="mr-4">
//             <Button
//               color="gray"
//               variant="outlined"
//               ripple={true}
//               className="hover:bg-amber-600 duration-300 ease-in-out"
//               onClick={() => dispatch(filteredProducts(item))}
//             >
//               {item}
//             </Button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NavigationButtons;
