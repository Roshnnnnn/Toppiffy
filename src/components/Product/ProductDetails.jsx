import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "../features/Accordion";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);

  const product = useSelector((state) => state.chocolates?.singleProduct);

  return (
    <div>
      {product
        .filter((item) => item.id === productId)
        .map((item, index) => (
          <div key={index}>
            <div className="flex flex-col justify-between lg:flex-row p-4 gap-16 lg:items-center">
              <div className="flex flex-col gap-6 lg:w-2/4">
                <img src={item.images.image} alt="item-image" />
              </div>
              <div className="flex flex-col gap-4 lg:w-2/4 items-center">
                <div>
                  <h1 className="text-amber-700 font-semibold text-5xl">
                    {item.name}
                  </h1>
                </div>
                <div>
                  <h2 className="font-semibold text-2xl">{item.description}</h2>
                </div>
                <div className="flex gap-8">
                  <div>
                    <Accordion title="Ingredients">
                      <ul className="list-none gap-2">
                        {item.ingredients.map((ingredient, i) => (
                          <li key={i} className="">
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </Accordion>
                  </div>
                  <div>
                    <Accordion title="Nutrition">
                      <ul className="list-none gap-2">
                        <li>Calories: {item.nutrition.calories}</li>
                        <li>Fat: {item.nutrition.fat}g</li>
                        <li>Carbohydrates: {item.nutrition.carbohydrates}g</li>
                        <li>Protein: {item.nutrition.protein}g</li>
                      </ul>
                    </Accordion>
                  </div>
                </div>
                <div>
                  <div className="text-xl">Rating: {item.rating} ⭐</div>
                </div>
                <div className="text-2xl">$ {item.price}</div>
                <div>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductDetails;
