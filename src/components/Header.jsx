import React from "react";
import "remixicon/fonts/remixicon.css";
const Header = () => {
  return (
    <div className="absolute w-full   flex items-center justify-end z-10 p-5">
      <button className="bg-black text-gray-300 border-2  hover:bg-gray-500 hover:text-white hover:border-black text-1xl mt-7 mr-7 px-3 py-2 rounded-full">
        Hire me
      </button>
      {/* <i className=" text-white text-1xl  ml-3 ri-more-2-fill"></i>  */}
    </div>
  );
};

export default Header;
