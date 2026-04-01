import React from "react";
import "remixicon/fonts/remixicon.css";
const Header = () => {
  return (
    <div className="absolute w-full   flex items-center justify-end z-10 p-17">
      <button className="px-6 py-3 rounded-full border border-gray-600 hover:bg-white font-bold bg-black text-white hover:text-black transition-all duration-300">
        Hire Me
      </button>
      {/* <i className=" text-white text-1xl  ml-3 ri-more-2-fill"></i>  */}
    </div>
  );
};

export default Header;
