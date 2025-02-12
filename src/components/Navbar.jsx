import React from "react";
import reactImg from "../assets/react.svg";
import viteImg from "../assets/vite.svg";
import tailwindImg from "../assets/tailwind.png";

const Navbar = () => {
  return (
   
    <nav className="py-2   w-screen rounded-xl  bg-transparent backdrop-blur-md  z-10 md:py-4     fixed">
      <div className=" flex flex-col md:flex-row items-center justify-center md:justify-evenly  md:py-1  md:px-3">
      <div className=" flex items-center justify-center">
        <h1 className="tracking-widest text-white   px-20   font-extrabold   text-2xl font-['Montserrat_Alternates']">
          <span className="font-extrabold text-teal-500">&lt;</span>
          <span className="text-red-600 font-extrabold">/</span>Portfolio
          <span className="text-teal-500 font-extrabold">&gt;</span>
        </h1>
      </div>
      {/* <img className="w-10 p-0 m-0  " src={homeIcon} alt="" /> */}

      <div className="img flex gap-5 mb-2   items-center justify-center">
        <a href="https://vite.dev/" target="_blank">
          {" "}
          <img
            className="hover:scale-150 cursor-pointer transition-transform"
            src={viteImg}
            alt=""
          />
        </a>
        <a href="https://react.dev/" target="_blank">
          {" "}
          <img
            className="hover:scale-150 cursor-pointer transition-transform"
            src={reactImg}
            alt=""
          />
        </a>
        <a href="https://tailwindcss.com/" target="_blank">
          {" "}
          <img
            className="hover:scale-150 cursor-pointer transition-transform"
            src={tailwindImg}
            width={45}
            alt=""
          />
        </a>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
