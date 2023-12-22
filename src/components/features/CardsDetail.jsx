import { Link } from "react-router-dom";

const CardsDetail = ({ item }) => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="p-4 md:p-8 lg:p-12">
        <Link to={`/product-details/${item.id}`}>
          <div className="w-full lg:w-[12rem] md:h-[16rem] lg:h-[20rem]">
            <img
              src={item.images.image}
              alt=""
              className="object-cover w-full h-full rounded-md"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center mt-4">
          <span className="text-sm mb-2 text-center">{item.name}</span>
          <span className="text-lg text-center">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
