import React from "react";
import homeIcon from "../assets/home.svg"

const Navbar = () => {
  return (
    <nav className="bg-slate-300  left-1/2 -translate-x-1/2 flex items-center justify-center    shadow-xl  fixed top-10 rounded-full py-1 px-3 "><img className="w-10 p-0 m-0  " src={homeIcon} alt="" /></nav>
  );
};

export default Navbar;
