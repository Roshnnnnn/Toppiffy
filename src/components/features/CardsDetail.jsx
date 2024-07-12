import { useDispatch } from "react-redux";
import { singleProduct } from "../redux/slices/productSlice";
import { Link, useParams } from "react-router-dom";
import Button from "./Button";

const CardsDetail = ({ item, id }) => {
  const dispatch = useDispatch();
  const { brand } = useParams();

  return (
    <div className="flex justify-center items-center mx-8 my-0 mt-16">
      <div className="bg-gray-100 p-4 md:p-6 lg:p-8 w-full sm:w-[220px] md:w-[180px] lg:w-[260px] rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
        <Link
          to={`/${item.brand}/${id}`}
          onClick={() => dispatch(singleProduct(id))}
          className="block relative group"
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              loading="lazy"
              src={
                item.images.image ||
                "https://www.ameliechocolat.co.uk/product_images/i/079/Amelie_50_1000_x_1000__97003_zoom.jpg"
              }
              alt={item.name}
              className="object-cover w-full h-40 sm:h-48 rounded-md transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <img
              src={
                item.images.image_secondary ||
                "https://www.ameliechocolat.co.uk/product_images/i/079/Amelie_50_1000_x_1000__97003_zoom.jpg"
              }
              alt={`${item.name} hover`}
              className="object-cover w-full h-40 sm:h-48 rounded-md absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
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
          <Button product={item} />
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
