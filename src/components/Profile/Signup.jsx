import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { auth, db } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfrmPass, setCnfrmPass] = useState("");
  const [isSpecialMember, setIsSpecialMember] = useState(false);
  const [passToggle, setPassToggle] = useState(false);
  const [cnfrmPassToggle, setCnfrmPassToggle] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== cnfrmPass) {
      toast.error("Password not matched");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);

        await setDoc(doc(db, "users", user.uid), {
          username: username,
          email: email,
          isSpecialMember: isSpecialMember,
        });

        toast.success("Sign up complete");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const togglePassword = () => {
    setPassToggle(!passToggle);
  };

  const cnfrmTogglePassword = () => {
    setCnfrmPassToggle(!cnfrmPassToggle);
  };

  return (
    <>
      <Helmet>
        <title>Sign Up - ChocoKart</title>
        <meta
          name="description"
          content="Create an account on ChocoKart to enjoy a personalized shopping experience for toffees and chocolates."
        />
      </Helmet>
      <div>
        <ToastContainer />
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
                Sign Up
              </h1>
              <form action="" className="flex flex-col" onSubmit={registerUser}>
                <div className="my-4 relative">
                  <input
                    type="text"
                    className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Username
                  </label>
                  <BiUser className="absolute top-0 right-4" />
                </div>
                <div className="my-4 relative">
                  <input
                    type="email"
                    className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Your Email
                  </label>
                  <BiUser className="absolute top-0 right-4" />
                </div>
                <div className="my-4 relative">
                  <input
                    type={passToggle ? "text" : "password"}
                    className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-0 right-4 focus:outline-none"
                  >
                    {passToggle ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                <div className="my-4 relative">
                  <input
                    type={cnfrmPassToggle ? "text" : "password"}
                    className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                    placeholder=""
                    required
                    value={cnfrmPass}
                    onChange={(e) => setCnfrmPass(e.target.value)}
                  />
                  <label className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Confirm Password
                  </label>
                  <button
                    type="button"
                    onClick={cnfrmTogglePassword}
                    className="absolute top-0 right-4 focus:outline-none"
                  >
                    {cnfrmPassToggle ? <FaRegEyeSlash /> : <FaRegEye />}
                  </button>
                </div>
                <div className="my-4 relative">
                  <input
                    type="checkbox"
                    id="specialMember"
                    checked={isSpecialMember}
                    onChange={(e) => setIsSpecialMember(e.target.checked)}
                  />
                  <label htmlFor="specialMember" className="text-white ml-2">
                    Special Member
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <span className="m-4">
                    Already Member?
                    <Link to="/login" className="text-blue-600">
                      Login
                    </Link>
                  </span>
                </div>
                <button
                  type="submit"
                  className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-amber-600 hover:text-white py-2 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
