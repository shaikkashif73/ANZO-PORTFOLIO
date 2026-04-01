import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from(".rotateText", {
      transform: "rotateX(-80deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rotateText",
        // markers: true,
        start: "top 50%",
        end: "top -200%",
        scrub: 2,
      },
    });
  });
  return (
    <div id="section2" className="bg-gray-700 text-center p-5 text-white">
      <h3 className="text-gray-500 text-1xl">
        - kashifcodes10@gmail.com | designed and developed
      </h3>
      <div className=" rotateText mt-10">
        <h1 className="text-[15vw]   font-extrabold leading-[13vw] ">
          IMPACTFUL
        </h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[15vw]   font-extrabold leading-[13vw] ">DESIGN</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[15vw]   font-extrabold leading-[13vw] ">IS THE</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[15vw]   font-extrabold leading-[13vw] ">DESIGN</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[15vw]   font-extrabold leading-[13vw] ">THAT</h1>
      </div>
      <div className="rotateText">
        <h1 className="text-[15vw]   font-extrabold leading-[13vw] ">WORKS</h1>
      </div>
    </div>
  );
};

export default Page2;
