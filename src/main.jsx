import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import Header from "./components/HomePage/Header.jsx";
import Login from "./components/Profile/Login.jsx";
import ProductList from "./components/Product/ProductList.jsx";
import ProductDetails from "./components/Product/ProductDetails.jsx";
import ContactUs from "./components/Contact/ContactUs.jsx";
import Signup from "./components/Profile/Signup.jsx";
import Error from "./Error.jsx";
import Cart from "./components/Cart/Cart.jsx";
import FilteredProduct from "./components/Product/FilteredProduct.jsx";
import Reset from "./components/Profile/Reset.jsx";
import store from "./components/redux/store.js";
import { Provider } from "react-redux";
import { auth } from "./components/config/firebase.js";
import { useState, useEffect } from "react";

function ProtectedRoute({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Header />} />{" "}
      <Route element={<ProtectedRoute />}>
        <Route path="product" element={<ProductList />} />
        <Route
          path="filteredProducts/:brand/:id"
          element={<ProductDetails />}
        />
        <Route path="contact" element={<ContactUs />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/filteredProducts/:brand" element={<FilteredProduct />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="reset" element={<Reset />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
