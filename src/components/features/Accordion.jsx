import { useState } from "react";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`border rounded overflow-hidden mb-4 w-[13rem] transition-all duration-700 ease-in-out ${
        isOpen ? "max-h-[500px]" : "max-h-[3rem]"
      }`}
    >
      <button
        className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">{title}</span>
      </button>
      <div className="p-4 bg-white">
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
