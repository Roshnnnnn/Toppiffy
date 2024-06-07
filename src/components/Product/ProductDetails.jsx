import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Accordion from "../features/Accordion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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
        <div className="container m-auto py-8">
          <div className="flex flex-col lg:flex-row p-4 gap-16 lg:items-center bg-white rounded-lg shadow-md">
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={product.images.image}
                alt={product.name}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col gap-4 lg:w-2/4 items-center">
              <div>
                <h1 className="text-amber-700 font-semibold text-3xl lg:text-5xl">
                  {product.name}
                </h1>
              </div>
              <div>
                <p className="font-semibold text-lg">{product.description}</p>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="mb-4 lg:mb-0">
                  <Accordion title="Ingredients">
                    <ul className="list-none gap-2">
                      {product.ingredients.map((ingredient, i) => (
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
              </div>
              <div>
                <div className="text-lg">Rating: {product.rating} ⭐</div>
              </div>
              <div className="text-2xl">$ {product.price}</div>

              <div>
                <div className="mt-6">
                  <Button product={product} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
