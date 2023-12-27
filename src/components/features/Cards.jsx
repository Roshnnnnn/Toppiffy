import { Link } from "react-router-dom";

const Card = ({ image }) => {
  return (
    <div className="m-4 ">
      <div className="m-6">
        <div className="">
          <img src={image} alt="" className="h-full w-full rounded-custom" />
        </div>
      </div>
    </div>
  );
};

export default Card;
