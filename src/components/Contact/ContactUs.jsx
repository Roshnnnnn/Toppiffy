import { Link } from "react-router-dom";
import { FaHandPointLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - ChocoKart</title>
        <meta
          name="description"
          content="Get in touch with us at ChocoKart for any queries or support. We are here to help you with all your toffees and chocolates needs."
        />
      </Helmet>
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
              Contact Us
            </h1>
            <form
              action="https://formspree.io/f/mpzvzprw"
              className="flex flex-col"
              method="POST"
            >
              <div className="my-4 relative">
                <input
                  id="name"
                  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                  name="username"
                  required
                  autoComplete="off"
                />
                <label className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your Name
                </label>
              </div>
              <div className="my-4 relative">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  required
                  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                />
                <label className="absolute text-sm text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Your Email
                </label>
              </div>
              <div className="my-4 relative">
                <textarea
                  className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                  id="message"
                  rows="4"
                  required
                  autoComplete="off"
                  name="Message"
                ></textarea>
                <label className="absolute text-lg text-white duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark-text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-amber-600 hover:text-white py-2 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="absolute top-10 left-12 transform -translate-x-1 -translate-y-1 text-amber-600 text-center">
          <p className="text-5xl font-semibold">
            <Link to="/">
              <FaHandPointLeft />
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
