import { useDispatch } from "react-redux";
import { singleProduct } from "../redux/slices/productSlice";
import { Link, useParams } from "react-router-dom";

const CardsDetail = ({ item, id }) => {
  const dispatch = useDispatch();
  const { brand } = useParams();

  return (
    <div className="flex justify-center items-center my-0">
      <div className="bg-slate-400 md:p-8 lg:p-12 top-8 ">
        <Link to={`/filteredProducts/${item.brand}/` + id}>
          <div
            className="lg:w-full md:h-[10rem] lg:h-[10rem] flex justify-center"
            onClick={() => dispatch(singleProduct(id))}
          >
            <img
              src={item.images.image}
              alt=""
              className="object-cover w-[10rem] h-[10rem] rounded-md"
            />
          </div>
          <div className="flex flex-col justify-center mt-4">
            <span className="text-sm mb-2 text-center">{item.name}</span>
            <span className="text-lg text-center">${item.price}</span>
          </div>
        </Link>
        <div className="w-full flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
