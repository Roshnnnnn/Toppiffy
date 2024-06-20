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
              <th className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                Image
              </th>
              <th className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                Brand
              </th>
              <th className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                Name
              </th>
              <th className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                Price
              </th>
              <th className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id} className="border-b border-gray-200">
                  <td className="border border-gray-200 px-4 py-2 text-center relative">
                    <img
                      src={product.images.image}
                      alt={product.name}
                      className="h-16 w-16 md:h-20 md:w-20 object-cover mx-auto transition duration-300 transform hover:scale-110"
                    />
                    <img
                      src={product.images.hoverImage}
                      alt={product.name}
                      className="h-16 w-16 md:h-20 md:w-20 object-cover mx-auto absolute top-0 left-0 opacity-0 pointer-events-none transition duration-300 transform scale-95 hover:opacity-100"
                    />
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                    {product.brand}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                    {product.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-200 px-4 py-2 text-sm md:text-base">
                    <span className="md:hidden">{product.quantity}</span>
                    <span className="hidden md:inline">{`${product.quantity} pieces`}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="border border-gray-200 px-4 py-2 text-sm md:text-base"
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
