import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../redux/slices/productSlice";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.chocolates);

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Products
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                Image
              </th>
              <th className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                Brand
              </th>
              <th className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                Name
              </th>
              <th className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                Price
              </th>
              <th className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="border border-gray-200 px-2 md:px-4 py-2 text-center relative">
                    <div className="relative h-16 w-16 md:h-20 md:w-20 mx-auto">
                      <img
                        loading="lazy"
                        src={product.images.image}
                        alt={product.name}
                        className="object-cover w-full h-full transition duration-300 transform hover:scale-110"
                      />
                      <img
                        src={product.images.hoverImage}
                        alt={product.name}
                        className="absolute top-0 left-0 object-cover w-full h-full opacity-0 transition duration-300 transform scale-95 hover:opacity-100 pointer-events-none"
                      />
                    </div>
                  </td>
                  <td className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                    {product.brand}
                  </td>
                  <td className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                    {product.name}
                  </td>
                  <td className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base">
                    <span className="md:hidden">{product.quantity}</span>
                    <span className="hidden md:inline">{`${product.quantity} pieces`}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="border border-gray-200 px-2 md:px-4 py-2 text-xs md:text-base"
                  colSpan="5"
                >
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
