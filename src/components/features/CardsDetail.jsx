import { useDispatch } from "react-redux";
import { singleProduct } from "../redux/slices/productSlice";
import { Link, useParams } from "react-router-dom";

const CardsDetail = ({ item, id }) => {
  const dispatch = useDispatch();
  const { brand } = useParams();

  return (
    <div className="flex justify-center items-center my-0 mt-16">
      <div className="bg-gray-100 md:p-8 lg:p-12 top-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <Link
          to={`/filteredProducts/${item.brand}/${id}`}
          onClick={() => dispatch(singleProduct(id))}
        >
          <div className="lg:w-full md:h-48 lg:h-48 flex justify-center overflow-hidden">
            <img
              src={item.images.image}
              alt={item.name}
              className="object-cover w-full h-full rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center mt-4">
            <span className="text-sm mb-2 text-center font-semibold text-gray-700">
              {item.name}
            </span>
            <span className="text-lg text-center font-bold text-amber-600">
              ${item.price}
            </span>
          </div>
        </Link>
        <div className="w-full flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue transition duration-300 ease-in-out transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
