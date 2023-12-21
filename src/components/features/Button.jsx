import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

const Button = () => {
  const [open, setOpen] = useState(false);
  const menu = ["login", "logout"];
  return (
    <div className="h-screen bg-gray-300">
      <div className="relative">
        <FaRegUser onClick={() => setOpen(!open)} />
        {open && (
          <div className="bg-white p-4 w-30 shadow-lg absolute -left-14 top-24">
            <ul>
              {menu.map((item, index) => (
                <li
                  className="p-2 text-lg cursor-pointer rounded hover:bg-amber-600"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Button;
