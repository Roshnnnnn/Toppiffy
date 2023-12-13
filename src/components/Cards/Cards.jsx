const Card = ({ image }) => {
  return (
    <div className="m-4  w-[15rem] h-[20rem]">
      <div className="">
        <img src={image} alt="" className="h-full w-full rounded-custom" />
      </div>
    </div>
  );
};

export default Card;
