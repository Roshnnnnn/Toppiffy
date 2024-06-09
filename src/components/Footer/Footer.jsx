import { Link } from "react-router-dom";
import Image from "../../assets/logo_here.avif";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="p-5 md:p-12 lg:p-25  leading-5">
        <div className="bg-slate-300 rounded-lg">
          <div className="py-6 md:py-12 border-t border-solid">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5">
                {/* Company Info */}
                <div className="md:col-span-2 text-center md:text-left">
                  <img
                    src={Image}
                    alt="image"
                    className="mb-4 mx-auto md:mx-0"
                  />
                  <p className="text-sm md:w-70 w-full mx-auto md:mx-0 mb-4">
                    Toppiffy is India's #1 Omni-channel retailer and official
                    distributor of Imported Chocolates. All our products are
                    100% authentic and sourced directly from brands.
                  </p>
                </div>

                {/* Categories */}
                <div className="md:col-span-1 text-center md:text-left">
                  <h2 className="text-xl font-bold mb-2">Categories</h2>
                  <ul className="list-none m-0 text-sm">
                    <li className="mb-1">Biscuits & Spreads</li>
                    <li className="mb-1">Milk Chocolate</li>
                    <li className="mb-1">Coffee & Hot Chocolate</li>
                    <li className="mb-1">Dark Chocolate</li>
                    <li className="mb-1">Protein Bars & Supplements</li>
                  </ul>
                </div>

                {/* Useful Links */}
                <div className="md:col-span-1 text-center md:text-left">
                  <h2 className="text-xl font-bold mb-2 ">Useful Links</h2>
                  <ul className="list-none m-0 text-sm">
                    <li className="mb-1">Coco Cafe</li>
                    <li className="mb-1">Track Your Order</li>
                    <li className="mb-1">My Account</li>
                    <li className="mb-1">Privacy Policy</li>
                    <li className="mb-1">Terms & Conditions</li>
                    <li className="mb-1">FAQs</li>
                    <li className="mb-1">Return & Refund Policy</li>
                  </ul>
                </div>

                {/* Get in Touch */}
                <div className="md:col-span-1 text-center md:text-left flex flex-col justify-center">
                  <h2 className="text-base font-semibold mb-2">Get in Touch</h2>
                  <ul className="list-none m-0 mb-4">
                    <li className="mb-1 flex items-center justify-center md:justify-start">
                      <FaPhone className="mr-1" />
                      <span>+91 9893018968</span>
                    </li>
                    <Link
                      to="mailto:roshankumar.02yadav@gmail.com"
                      className="mb-1"
                    >
                      roshankumar.02yadav@gmail.com
                    </Link>
                  </ul>
                  <div className="flex justify-center md:justify-start space-x-4">
                    <Link to="https://facebook.com" className="text-blue-600">
                      <FaFacebook size="24" />
                    </Link>
                    <Link to="https://twitter.com" className="text-blue-400">
                      <FaTwitter size="24" />
                    </Link>
                    <Link to="https://instagram.com" className="text-pink-500">
                      <FaInstagram size="24" />
                    </Link>
                    <Link to="https://linkedin.com" className="text-blue-700">
                      <FaLinkedin size="24" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
