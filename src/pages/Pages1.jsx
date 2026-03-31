import React from "react";
import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";

const Pages1 = () => {
  return (
    <div className="h-screen p-3    bg-gray-700">
      <div className="h-full p-7 bg-cover w-full bg-[url(https://i.pinimg.com/1200x/1f/81/c8/1f81c8c87c794cbfb15292005306bec5.jpg)] rounded-[20px] shadow-lg shadow-red-900 overflow-hidden">
        <img
          className="rounded-full h-15 mt-1 rotate-90"
          src="https://i.pinimg.com/736x/3a/13/a8/3a13a87a7792339645429286ee3066a0.jpg"
          alt=""
        />
        <TiltText />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Pages1;
