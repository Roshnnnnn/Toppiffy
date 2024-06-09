import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "../features/Accordion";
import Navbar from "../Navbar/Navbar";
import Button from "../features/Button";
import { Helmet } from "react-helmet-async";
import { singleProduct } from "../redux/slices/productSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(singleProduct(parseInt(id)));
  }, [dispatch, id]);

  const product = useSelector((state) => state.chocolates.singleProduct);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${product.name} - ChocoKart`}</title>
        <meta
          name="description"
          content={`Buy ${product.name} at ChocoKart. ${product.description}`}
        />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto py-8 px-4 lg:px-8 ">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-start bg-white rounded-lg shadow-md">
            <div className="lg:w-1/2">
              <img
                src={product.images.image}
                alt={product.name}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="lg:w-1/2 p-4 lg:p-[6rem]">
              <h1 className="text-3xl lg:text-4xl font-semibold text-amber-700 mb-2">
                {product.name}
              </h1>
              <p className="text-lg mb-4">{product.description}</p>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <Accordion title="Ingredients">
                  <ul className="list-none gap-2 ">
                    {product.ingredients.map((ingredient, i) => (
                      <li key={i} className="text-sm">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </Accordion>
                <Accordion title="Nutrition">
                  <ul className="list-none gap-2 ">
                    <li className="text-sm">
                      Calories: {product.nutrition.calories}
                    </li>
                    <li className="text-sm">Fat: {product.nutrition.fat}g</li>
                    <li className="text-sm">
                      Carbohydrates: {product.nutrition.carbohydrates}g
                    </li>
                    <li className="text-sm">
                      Protein: {product.nutrition.protein}g
                    </li>
                  </ul>
                </Accordion>
              </div>
              <div className="text-lg mb-2">Rating: {product.rating} ⭐</div>
              <div className="text-2xl font-semibold mb-4">
                $ {product.price}
              </div>
              <div className="mt-6">
                <Button product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
