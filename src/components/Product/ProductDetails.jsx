import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "../features/Accordion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { addToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id);
  const dispatch = useDispatch();

  const product = useSelector((state) => state.chocolates?.singleProduct);

  return (
    <div className=" min-h-screen">
      <Navbar />
      <div className="container m-auto py-8">
        {product.map((item, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row p-4 gap-16 lg:items-center bg-white rounded-lg shadow-md"
          >
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={item.images.image}
                alt={item.name}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-2/4 items-center">
              <div>
                <h1 className="text-amber-700 font-semibold text-3xl lg:text-5xl">
                  {item.name}
                </h1>
              </div>
              <div>
                <p className="font-semibold text-lg">{item.description}</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="mb-4 lg:mb-0">
                  <Accordion title="Ingredients">
                    <ul className="list-none gap-2">
                      {item.ingredients.map((ingredient, i) => (
                        <li key={i} className="text-sm">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                </div>
                <div className="mb-4 lg:mb-0">
                  <Accordion title="Nutrition">
                    <ul className="list-none gap-2">
                      <li className="text-sm">
                        Calories: {item.nutrition.calories}
                      </li>
                      <li className="text-sm">Fat: {item.nutrition.fat}g</li>
                      <li className="text-sm">
                        Carbohydrates: {item.nutrition.carbohydrates}g
                      </li>
                      <li className="text-sm">
                        Protein: {item.nutrition.protein}g
                      </li>
                    </ul>
                  </Accordion>
                </div>
              </div>
              <div>
                <div className="text-lg">Rating: {item.rating} ⭐</div>
              </div>
              <div className="text-2xl">$ {item.price}</div>

              <div>
                <div className="mt-6">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          amount: 1,
                          totalPrice: item.price,
                        })
                      )
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
