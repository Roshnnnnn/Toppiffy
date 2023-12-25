import { Link } from "react-router-dom";

const Card = ({ image }) => {
  return (
    <div className="m-4 ">
      <div className="m-6">
        <Link to={"/product"}>
          <div className="">
            <img src={image} alt="" className="h-full w-full rounded-custom" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
