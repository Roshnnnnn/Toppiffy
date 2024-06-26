import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { setShippingInfo } from "../redux/slices/cartSlice";

export default function Modal({
  name,
  address,
  pincode,
  phoneNumber,
  city,
  state,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  setCity,
  setState,
  buyNow,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleOrderNow = () => {
    dispatch(
      setShippingInfo({ name, address, pincode, phoneNumber, city, state })
    );
    buyNow();
    closeModal();
  };

  return (
    <>
      <div className="text-center rounded-lg text-white font-bold">
        <button
          type="button"
          onClick={openModal}
          className="w-full my-8 px-4 py-2 bg-violet-600 text-white rounded-lg font-bold hover:bg-violet-700 focus:outline-none"
        >
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-sm mx-auto w-full md:max-w-2xl">
                <Dialog.Title className="bg-violet-600 text-white py-4 px-6 font-bold text-lg">
                  Order Details
                </Dialog.Title>
                <div className="p-6 space-y-4">
                  <form>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full sm:text-sm rounded-lg p-2.5 bg-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full sm:text-sm rounded-lg p-2.5 bg-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="pincode"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Pincode
                      </label>
                      <input
                        type="number"
                        id="pincode"
                        name="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full sm:text-sm rounded-lg p-2.5 bg-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full sm:text-sm rounded-lg p-2.5 bg-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-900"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full sm:text-sm rounded-lg p-2.5 bg-gray-100"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-900"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="border-gray-300 focus:ring-violet-600 focus:border-violet-600 block w-full sm:text-sm rounded-lg p-2.5 bg-gray-100"
                        required
                      />
                    </div>
                  </form>
                  <div className="mt-4">
                    <button
                      onClick={handleOrderNow}
                      type="button"
                      className="w-full px-4 py-2 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 focus:outline-none"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
