import Navbar from "../Navbar/Navbar";
import Products from "./Products";
import Users from "./Users";
import { useState } from "react";

const Dashboard = () => {
  const [selected, setSelected] = useState(null);

  const handleUserClick = () => {
    setSelected("users");
  };

  const handleProductClick = () => {
    setSelected("products");
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
            Dashboard
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div
              className="bg-white shadow-md rounded-lg p-6 col-span-1"
              onClick={handleUserClick}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Users
              </h3>
              <Users />
              {selected === "users" && <div> {/* User data goes here */} </div>}
            </div>
            <div
              className="bg-white shadow-md rounded-lg p-6 col-span-1 lg:col-span-2"
              onClick={handleProductClick}
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Products
              </h3>
              <Products />
              {selected === "products" && (
                <div> {/* Product data goes here */} </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
