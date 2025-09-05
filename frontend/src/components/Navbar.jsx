import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "../assets/asset.js";
import { useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 lg:px-12 bg-white sticky top-0 z-50">
      <h1 className="font-bold text-2xl text-blue-600 tracking-tight">
        POSTLY
      </h1>

      <nav className="hidden md:flex gap-8 items-center">
        {NavLinks.map((item, i) => (
          <Link
            to={item.url}
            key={i}
            className={`relative text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
              i === 2 ? "font-semibold text-blue-600" : ""
            } group`}
          >
            {item.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      <div
        className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors cursor-pointer"
        onClick={() => setMobile(!mobile)}
      >
        {mobile ? (
          <FaTimes className="text-gray-700 text-xl" />
        ) : (
          <FaBars className="text-gray-700 text-xl" />
        )}
      </div>
      {mobile && (
        <div
          className="fixed inset-0 bg-black/20 z-50 md:hidden"
          onClick={() => setMobile(false)}
        >
          <nav
            className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg animate-slide-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h1 className="font-bold text-xl text-blue-600">POSTLY</h1>
              <button
                onClick={() => setMobile(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <FaTimes className="text-gray-700" />
              </button>
            </div>

            <div className="flex flex-col p-4">
              {NavLinks.map((item, i) => (
                <Link
                  to={item.url}
                  key={i}
                  onClick={() => setMobile(false)}
                  className={`py-3 px-4 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors ${
                    i === 2 ? "bg-blue-50 text-blue-600 font-medium" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
