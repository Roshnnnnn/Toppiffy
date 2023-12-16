const Card = ({ image }) => {
  return (
    <div className="m-8">
      <div className="">
        <img src={image} alt="" className="h-full w-full rounded-custom" />
      </div>
    </div>
  );
};

export default Card;
