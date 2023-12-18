import { Link } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});

  const signin = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/7525164/pexels-photo-7525164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <div>
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Login
          </h1>
          <form action="" className="flex flex-col">
            <div className="my-4 relative">
              <input
                type="email"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Email
              </label>
              <BiUser className="absolute top-0 right-4" />
            </div>
            <div className="my-4 relative">
              <input
                type="password"
                placeholder=""
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-0 right-4" />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox" name="" id="" className="mr-2" />
                <label htmlFor="Remember Me">Remember me</label>
              </div>
              <Link to="/" className="text-blue-600">
                Forgot Password
              </Link>
            </div>
            <button
              type="submit"
              className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-amber-600 hover:text-white py-2 transition-colors duration-300"
              onClick={signin}
            >
              Login
            </button>

            <div>
              <span className="m-4 ">
                New Here?
                <Link to="/signup" className="text-blue-600">
                  SignUp
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
