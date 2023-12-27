// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import CardsDetail from "../features/CardsDetail";
// import { filteredChocolate } from "../redux/slices/productSlice";

// const FilteredProduct = () => {
//   const chocolate = useSelector((state) => state.products?.filteredChocolate);
//   const { brand } = useParams();
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <div className="py-16">
//         <div className="pl-14">
//           <h1 className="text-4xl font-bold -tracking-normal leading-none">
//             {brand}
//           </h1>
//         </div>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 py-8"></div>
//       </div>
//     </div>
//   );
// };

// export default FilteredProduct;

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CardsDetail from "../features/CardsDetail";
import { useEffect } from "react";
import { filterChocolate } from "../redux/slices/productSlice";

const FilteredProduct = () => {
  const dispatch = useDispatch();
  const { brand } = useParams();
  console.log(brand, "params");

  useEffect(() => {
    const action = filterChocolate(brand);
    dispatch(action);
    // console.log("Action dispatched:", action);
  }, [dispatch, brand]);

  const chocolate = useSelector((state) => state.chocolates?.filteredChocolate);
  // console.log("Selected chocolate:", chocolate);

  return (
    <div>
      <div className="py-16">
        <div className="pl-14">
          <h1 className="text-4xl font-bold -tracking-normal leading-none">
            {brand}
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 py-8">
          {chocolate
            .filter((item) => item.brand === brand)
            .map((item, index) => (
              <div key={index}>
                <CardsDetail item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
