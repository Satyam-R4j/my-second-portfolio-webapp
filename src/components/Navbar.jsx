import React from "react";
import homeIcon from "../assets/home.svg";
import reactImg from "../assets/react.svg"
import viteImg from "../assets/vite.svg"
import tailwindImg from "../assets/tailwind.png"

const Navbar = () => {
  return (
    <nav className=" ml-10  bg-transparent backdrop-blur-md sm:flex-row sm:items-center  lg:flex lg:gap-80 items-center w-[80vw]    shadow-xl  fixed rounded-full lg:py-1 lg:px-3 ">
      <div className="">
      <h1 className="tracking-widest text-white sm:items-center sm:justify-center sm:flex px-20 py-5 font-extrabold  text-2xl font-['Montserrat_Alternates']">
        <span className="font-extrabold text-teal-500">&lt;</span>
        <span className="text-red-600 font-extrabold">/</span>Portfolio
        <span className="text-teal-500 font-extrabold">&gt;</span>
      </h1></div>
      {/* <img className="w-10 p-0 m-0  " src={homeIcon} alt="" /> */}

      <div className="img flex gap-5   items-center justify-center">
       <a href="https://vite.dev/" target="_blank"> <img className="hover:scale-150 cursor-pointer" src={viteImg} alt="" /></a>
       <a href="https://react.dev/" target="_blank"> <img className="hover:scale-150 cursor-pointer" src={reactImg} alt="" /></a>
       <a href="https://tailwindcss.com/" target="_blank"> <img className="hover:scale-150 cursor-pointer" src={tailwindImg} width={45} alt="" /></a>
      </div>
    </nav>
  );
};

export default Navbar;
