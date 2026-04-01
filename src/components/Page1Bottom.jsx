import React from "react";
import goldenCosmos from "../assets/goldenCosmos.gif";
import redCosmos from "../assets/redCosmos.gif";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to("#banner img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });
  });
  return (
    <div className="absolute left-0 p-13 flex items-end justify-between bottom-0 w-full ">
      <div>
        <h2 className="text-1xl text-white font-bold">
          BRAND DESIGN | WEBSITE DESIGN
        </h2>
        <h3 className="text-1xl text-gray-400"> BESPOKE FREELANCE</h3>
      </div>
      <div id="banner">
        {/* <img className="  h-20 w-20 rounded-full" src={redCosmos} alt="" /> */}
        <img className=" h-20 w-20 rounded-full" src={goldenCosmos} alt="" />
      </div>
    </div>
  );
};

export default Page1Bottom;
