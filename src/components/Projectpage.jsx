import React from "react";
import ViberImg from "../assets/viberr.png";
import burgerImg from "../assets/fresh-burger.png";
import HipssteImg from "../assets/hipsster.png";
import fitliftImg from "../assets/fitlift.png";

const Projectpage = () => {
  return (
    <>
      <div className="flex justify-center  pt- bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
        <div className="  w-[50wh]">
          <h1 className="font-extrabold text-center mb-16 font-['Rubik'] text-4xl text-white">
            PROJECTS
          </h1>
          <div className="flex flex-col md:flex-row  gap-6 items-center justify-center  text-center font-['Roboto_Mono'] ">
            <a
              href="https://github.com/Satyam-R4j/GetMeAChai-ReactApp"
              target="_blank"
            >
              {" "}
              <span className="" target="_blank">
                <img
                  className="bg-zinc-300 hover:scale-95 rounded-4xl w-[30vh] transition-transform"
                  src={ViberImg}
                  alt=""
                />
                <h1 className="text-white font-extrabold mt-2 text-xl ">
                  GetMeAChai
                </h1>
                <h2 className="text-zinc-300">a patreon webapp</h2>
              </span>
            </a>
            <a
              href="https://github.com/Satyam-R4j/Ochi-Design-Clone"
              target="_blank"
            >
              {" "}
              <span>
                <img
                  className="bg-zinc-300 hover:scale-95 rounded-4xl w-[30vh] transition-transform"
                  src={burgerImg}
                  alt=""
                />
                <h1 className="text-white font-extrabold mt-2 text-xl ">
                  Ochi-Design
                </h1>
                <h2 className="text-zinc-300">Ochi-Design clone</h2>
              </span>
            </a>
            <a
              href="https://github.com/Satyam-R4j/django-CosmoShop-webapp"
              target="_blank"
            >
              {" "}
              <span>
                <img
                  className="bg-zinc-300 hover:scale-95 rounded-4xl w-[30vh] transition-transform"
                  src={HipssteImg}
                  alt=""
                />
                <h1 className="text-white font-extrabold mt-2 text-xl ">
                  CosmoShop
                </h1>
                <h2 className="text-zinc-300">a Shopping webapp</h2>
              </span>
            </a>
            <a
              href="https://github.com/Satyam-R4j/Linktree-clone-webapp"
              target="_blank"
            >
              <span>
                <img
                  className="bg-zinc-300 hover:scale-95 rounded-4xl w-[30vh] transition-transform"
                  src={fitliftImg}
                  alt=""
                />
                <h1 className="text-white font-extrabold mt-2 text-xl ">
                  Linktree
                </h1>
                <h2 className="text-zinc-300">linktree clone</h2>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectpage;
