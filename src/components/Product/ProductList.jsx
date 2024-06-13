import Navbar from "../Navbar/Navbar";
import CardsDetail from "../features/CardsDetail";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.chocolates);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Products - ChocoKart</title>
        <meta
          name="description"
          content="Browse our variety of toffees and chocolates. Find your favorite treats and enjoy!"
        />
      </Helmet>

      <div>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow mt-2">
            <h1 className="text-4xl font-bold tracking-normal leading-none my-4 sm:mx-12">
              All Products
            </h1>
            <div className="flex justify-center items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-center items-center my-0"
                  >
                    <CardsDetail item={item} brand={item.brand} id={item.id} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
