const Card = ({ image }) => {
  return (
    <div className="m-8">
      <a href="/product-details">
        <div className="">
          <img src={image} alt="" className="h-full w-full rounded-custom" />
        </div>
      </a>
    </div>
  );
};

export default Card;
