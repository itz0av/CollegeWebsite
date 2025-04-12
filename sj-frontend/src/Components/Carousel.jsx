import React, { useState } from "react";

// import {CheveronLeft,CheveronRight } from "react-feather"
const Carousel = ({ children: slides }) => {
  const [curr, setCurr] = useState(0);

  const pre = () =>{
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className="h-screen w-screen overflow-hidden relative z-50 outline">
  <div
    className="flex transition-transform ease-out duration-500"
    style={{ transform: `translateX(-${curr * 100}%)` }}
  >
    {slides}
  </div>

  <div className="absolute flex inset-0 items-center justify-between z-[9999]">
    <button
      onClick={pre}
      className="bg-white flex px-3.5 py-3.5 rounded-full font-bold m-7 cursor-pointer hi"
    >
      <i className="fa-solid fa-arrow-left"></i>
    </button>
    <button
      onClick={next}
      className="bg-white flex px-3.5 py-3.5 rounded-full font-bold m-7 cursor-pointer"
    >
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</div>

  );
};

export default Carousel;
