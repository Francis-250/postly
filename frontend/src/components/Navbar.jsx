import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { NavLinks } from "../assets/asset.js";
import { useState } from "react";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <header className="flex justify-between items-center">
      <h1 className="font-bold">POSTLY</h1>
      <nav className="hidden md:flex gap-6 items-center">
        {NavLinks.map((item, i) => (
          <Link
            to={item.url}
            key={i}
            className={`hover:font-bold text-gray-500 hover:text-black ${
              i === 2 ? "font-" : ""
            } transition-all duration-400`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="sm:hidden" onClick={() => setMobile(!mobile)}>
        <FaBars />
      </div>
      {/* mobile */}
      {mobile && (
        <nav className="flex gap-6 items-center absolute flex-col p-3 top-10 right-0 rounded bg-black/90 justify-center">
          {NavLinks.map((item, i) => (
            <Link
              to={item.url}
              key={i}
              className={`hover:font-bold text-white hover:text-[#E1AD29] ${
                i === 2 ? "font-" : ""
              } transition-all duration-400`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
