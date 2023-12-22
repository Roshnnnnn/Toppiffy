import { Link } from "react-router-dom";

const CardsDetail = ({ item }) => {
  return (
    <div className="flex justify-center items-center my-12">
      <div className="p-8 ">
        <Link to="/product-details/:id">
          <div className="w-[12rem] h-[16rem] ">
            <img
              src={item.images.image}
              alt=""
              className="object-contain w-full h-full"
            />
          </div>
        </Link>
        <div className="flex flex-col justify-center">
          <span className="text-sm mb-2 text-center">{item.name}</span>
          <span className="text-lg text-center">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
