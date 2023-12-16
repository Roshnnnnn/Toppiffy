const CardsDetail = ({ item }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 ">
        <div className="w-[12rem] h-[16rem] ">
          <img
            src={item.images.image}
            alt=""
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm mb-2">{item.name}</span>
          <span className="text-lg">${item.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardsDetail;
