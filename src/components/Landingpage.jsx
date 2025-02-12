import React from "react";
import MyImg from "../assets/myPic.jpg";
import twitterDark from "../assets/twitter-dark.svg";
import githubDark from "../assets/github-dark.svg";
import linkedinDark from "../assets/linkedin-dark.svg";
import leetcodeDark from "../assets/leetcodeDark.svg";
import CV from "../assets/cv.pdf";

export const Landingpage = () => {
  return (
    <section className="   w-screen flex md:flex-row     min-h-screen">
      <div class="absolute top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className=" w-full  my-20 flex  flex-col md:flex-row justify-center  items-center ">
        {/* Left Section */}
        <div className="left hover:scale-95 cursor-pointer  flex items-center justify-center my-5   w-[50vh]">
          <img
            className="rounded-full transition-transform border w-44 border-zinc-600 shadow-2xl  shadow-zinc-800 md:w-80"
            src={MyImg}
            alt="Profile picture of Satyam Raj"
          />
        </div>
        <div className="md:w-[1px] md:h-50 w-[25%] h-[1px]  bg-zinc-500"></div>
        {/* Right Section */}
        <div className="right    w-[50vh] text-center text-white">
          <h1 className="font-['Rubik'] uppercase my-3 tracking-wider font-extrabold text-5xl">
            Satyam <br />
            Raj
          </h1>
          <h2 className="text-xl  uppercase my-2 font-bold">
            MERN stack Developer
          </h2>
          <span className="flex justify-center items-center gap-3 my-1">
            <a href="https://x.com/satyamraj2104" target="_blank">
              <img
                className="w-10 transition-transform hover:scale-120"
                src={twitterDark}
                alt="Twitter Icon"
              />
            </a>
            <a href="https://github.com/Satyam-R4j" target="_blank">
              <img
                className="w-10 transition-transform  hover:scale-120"
                src={githubDark}
                alt="github Icon"
              />
            </a>
            <a href="https://x.com/satyamraj2104" target="_blank">
              <img
                className="w-10 transition-transform hover:scale-120"
                src={linkedinDark}
                alt="linkedin Icon"
              />
            </a>
            <a href="https://leetcode.com/u/Satyam-Raj/" target="_blank">
              <img
                className="w-10 transition-transform hover:scale-120"
                src={leetcodeDark}
                alt="LeetCode Icon"
              />
            </a>
          </span>
          <span className="">
            <p className="font-['Roboto_Mono'] text-zinc-300 text-center mt-1   ">
              With a passion for developing <br /> modern React web app for{" "}
              <br /> commercial businesses.
            </p>
          </span>
          <a href={CV} target="_blank">
            <button className="p-3 transition-transform uppercase font-[Roboto_Mono] hover:scale-120 hover:bg-green-500  m-3 text-md  bg-emerald-600 font-bold rounded-xl cursor-pointer">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};


export default Landingpage;
