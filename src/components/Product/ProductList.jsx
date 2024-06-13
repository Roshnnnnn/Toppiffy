import { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar/Navbar";
import CardsDetail from "../features/CardsDetail";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/slices/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.chocolates);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleScroll = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const remainingHeight = documentHeight - (windowHeight + scrollTop);

    if (remainingHeight < 100 && !loading) {
      setLoading(true);
      setPage(page + 1);
    }
  }, [loading, page]);

  useEffect(() => {
    dispatch(fetchAllProducts(page));
  }, [dispatch, page]);

  useEffect(() => {
    setLoading(false);
  }, [products]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Helmet>
        <title>Products - ChocoKart</title>
        <meta
          name="description"
          content="Browse our variety of toffees and chocolates. Find your favorite treats and enjoy!"
        />
      </Helmet>

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
            {loading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
