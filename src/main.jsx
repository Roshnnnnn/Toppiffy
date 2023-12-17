import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/HomePage/Header.jsx";
import Login from "./components/Profile/Login.jsx";
import ProductList from "./components/Product/ProductList.jsx";
import ContactUs from "./components/Contact/ContactUs.jsx";
import Signup from "./components/Profile/Signup.jsx";
import Error from "./Error.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Header />} />
      <Route path="product" element={<ProductList />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
