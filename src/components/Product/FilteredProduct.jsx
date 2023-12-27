import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CardsDetail from "../features/CardsDetail";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import { filterChocolate } from "../redux/slices/productSlice";

const FilteredProduct = () => {
  const dispatch = useDispatch();
  const { brand } = useParams();
  console.log(brand, "params");

  useEffect(() => {
    const action = filterChocolate(brand);
    dispatch(action);
  }, [dispatch, brand]);

  const chocolate = useSelector((state) => state.chocolates?.filteredChocolate);

  return (
    <div>
      <Navbar />
      <div className="py-8">
        <div className="pl-14">
          <h1 className="text-4xl font-bold -tracking-normal leading-none">
            {brand}
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 py-8">
          {chocolate &&
            chocolate
              .filter((item) => item.brand === brand)
              .map((item, index) => (
                <div key={index}>
                  <CardsDetail item={item} id={item.id} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default FilteredProduct;
