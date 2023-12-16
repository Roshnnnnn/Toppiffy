import Image from "../../assets/logo_here.avif";

const Footer = () => {
  return (
    <div>
      <footer className="p-5 md:p-12 lg:p-25 text-amber-800 leading-5 ">
        <div className="bg-slate-300 rounded-20">
          <div className="py-6 md:py-12 border-t border-solid">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5">
                {/* Company Info */}
                <div className="md:col-span-2 text-center md:text-left">
                  <img src={Image} alt="" className="mb-4 mx-auto md:mx-0" />
                  <p className="text-sm md:w-70 w-full mx-auto md:mx-0 mb-4">
                    CocoCart is India's #1 Omni-channel retailer and official
                    distributor of Imported Chocolates. All our products are
                    100% authentic and sourced directly from brands.
                  </p>
                </div>

                {/* Categories */}
                <div className="md:col-span-1 text-center md:text-left">
                  <h4 className="text-base font-semibold mb-2">Categories</h4>
                  <ul className="list-none m-0">
                    <li className="mb-1">Biscuits & Spreads</li>
                    <li className="mb-1">Milk Chocolate</li>
                    <li className="mb-1">Coffee & Hot Chocolate</li>
                    <li className="mb-1">Dark Chocolate</li>
                    <li className="mb-1">Protein Bars & Supplements</li>
                  </ul>
                </div>

                {/* Useful Links */}
                <div className="md:col-span-1 text-center md:text-left">
                  <h4 className="text-base font-semibold mb-2">Useful Links</h4>
                  <ul className="list-none m-0">
                    <li className="mb-1">Coco Cafe</li>
                    <li className="mb-1">Track Your Order</li>
                    <li className="mb-1">My Account</li>
                    <li className="mb-1">Privacy Policy</li>
                    <li className="mb-1">Terms & Condition</li>
                    <li className="mb-1">FAQs</li>
                    <li className="mb-1">Return & Refund Policy</li>
                  </ul>
                </div>

                {/* Get in Touch */}
                <div className="md:col-span-1 text-center md:text-left">
                  <h4 className="text-base font-semibold mb-2">Get in Touch</h4>
                  <ul className="list-none m-0">
                    <li className="mb-1">+1 800120 2278</li>
                    <li className="mb-1">Email@email.com</li>
                  </ul>
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
