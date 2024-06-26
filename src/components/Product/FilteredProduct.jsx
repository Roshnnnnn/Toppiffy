import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CardsDetail from "../features/CardsDetail";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import { filterChocolate } from "../redux/slices/productSlice";
import { Helmet } from "react-helmet-async";
import Footer from "../Footer/Footer";

const FilteredProduct = () => {
  const dispatch = useDispatch();
  const { brand } = useParams();

  useEffect(() => {
    const action = filterChocolate(brand);
    dispatch(action);
  }, [dispatch, brand]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chocolate = useSelector((state) => state.chocolates?.filteredChocolate);

  return (
    <>
      <Helmet>
        <title>{brand} - ChocoKart</title>
        <meta
          name="description"
          content={`Browse our selection of ${brand} on ChocoKart. Find the best toffees and chocolates to satisfy your cravings.`}
        />
      </Helmet>
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
      <Footer />
    </>
  );
};

export default FilteredProduct;
