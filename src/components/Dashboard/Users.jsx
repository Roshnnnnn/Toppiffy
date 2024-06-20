import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

const placeholderImageUrl =
  "https://cdn.dribbble.com/users/2370289/screenshots/6150406/media/6579b4e1f9a6658157cf653538b25a8b.jpg?resize=400x0";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedCart, setSelectedCart] = useState([]);
  const [selectedOrders, setSelectedOrders] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = await Promise.all(
        usersSnapshot.docs.map(async (userDoc) => {
          const userData = userDoc.data();
          const userId = userDoc.id;

          const ordersCollection = collection(db, `users/${userId}/orders`);
          const ordersSnapshot = await getDocs(ordersCollection);
          const ordersList = ordersSnapshot.docs.map((orderDoc) => ({
            id: orderDoc.id,
            ...orderDoc.data(),
          }));

          const cartData = userData.cart || [];

          return {
            id: userId,
            ...userData,
            orders: ordersList,
            cart: cartData,
          };
        })
      );

      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  const handleUserClick = (user) => {
    setSelectedCart(user.cart);
    setSelectedOrders(user.orders);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
        Users
      </h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleUserClick(user)}
          >
            <div className="text-lg font-medium text-gray-700">
              {user.email}
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Cart Items:</h3>
        <ul className="mt-4 space-y-4">
          {selectedCart.length > 0 ? (
            selectedCart.map((item, index) => (
              <li
                key={index}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Product:</span> {item.name}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Quantity:</span> {item.amount}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Price:</span> ${item.price}
                </div>
              </li>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <img
                src={placeholderImageUrl}
                alt="No items in cart"
                className="w-64 h-64"
              />
            </div>
          )}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800">Orders:</h3>
        <ul className="mt-4 space-y-4">
          {selectedOrders.length > 0 ? (
            selectedOrders.map((order) => (
              <li
                key={order.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
              >
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Order ID:</span> {order.id}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Date:</span> {order.date}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Address:</span>{" "}
                  {order.addressInfo.address}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Phone:</span>{" "}
                  {order.addressInfo.phoneNumber}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Pincode:</span>{" "}
                  {order.addressInfo.pincode}
                </div>
                <ul className="mt-2 space-y-2">
                  {order.cart.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-2 bg-white border border-gray-200 rounded-lg"
                    >
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Product:</span>{" "}
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Quantity:</span>{" "}
                        {item.amount}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold">Price:</span> $
                        {item.price}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <img
                src={placeholderImageUrl}
                alt="No orders"
                className="w-64 h-64"
              />
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Users;
