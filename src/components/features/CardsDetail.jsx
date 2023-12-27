import { Link } from "react-router-dom";

const CardsDetail = ({ item }) => {
  return (
    <div className="flex justify-center items-center my-0">
      <div className="bg-slate-400 md:p-8 lg:p-12 top-8 ">
        <Link to={`/product-details/${item.id}`}>
          <div className="lg:w-full md:h-[10rem] lg:h-[10rem]">
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
        <div className="bg-blue-600 mt-3 justify-center"></div>
      </div>
    </div>
  );
};

export default CardsDetail;
