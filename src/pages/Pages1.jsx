import React, { useRef, useState } from "react";
// import TiltText from "../components/TiltText";
import Page1Bottom from "../components/Page1Bottom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Pages1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        30,
    );

    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 10,
    );
  };

  useGSAP(
    function () {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg)   rotateY(${xVal}deg)`,
        duration: 1,
        ease: "elastic.out(1,0.6)",
      });
    },
    [xVal, yVal],
  );
  return (
    <div
      id="page1"
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="h-screen p-3 relative bg-gray-700"
    >
      <div
        id="page1-in"
        className="h-full p-7 bg-cover relative w-full bg-[url(https://i.pinimg.com/1200x/1f/81/c8/1f81c8c87c794cbfb15292005306bec5.jpg)] rounded-[20px] shadow-lg shadow-red-900 overflow-hidden"
      >
        <img
          className="rounded-full h-15 mt-1 rotate-90"
          src="https://i.pinimg.com/736x/3a/13/a8/3a13a87a7792339645429286ee3066a0.jpg"
          alt=""
        />
        <div id="tiltDiv" ref={tiltRef} className="mt-27">
          <h1 className="text-[4vw] leading-[4vw]  text-white ">
            Iam <span className="text-black font-bold ">DARK MODE</span>™
          </h1>
          <h1 className="text-[9vw]  leading-[6vw]  text-white font-extrabold">
            DESIGNER
          </h1>
          <h1 className="text-[4vw]  leading-[6vw]  text-shadow-mist-900 font-bold ">
            TO HIRE
          </h1>
        </div>
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Pages1;
