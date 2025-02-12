
import React from "react";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.png";
import algo from "../assets/skills/algo.png";
import cpp from "../assets/skills/cpp.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import javascript from "../assets/skills/javascript.png";
import python from "../assets/skills/python.png";
import next from "../assets/skills/next.png";
import express from "../assets/skills/express.png";
import mongo from "../assets/skills/mongo.png";
import node from "../assets/skills/node.png";
import mysql from "../assets/skills/mysql.png";
import bash from "../assets/skills/bash.png";
import git from "../assets/skills/git.png";
import postman from "../assets/skills/postman.png";
import figma from "../assets/skills/figma.gif";
import photoshop from "../assets/skills/photoshop.gif";
import linux from "../assets/skills/linux.png";

const Skills = () => {
  return (
    <div className="flex justify-center w-screen pt-10 md:pt-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-screen">
      <div className="w-full max-w-[600px] px-5">
        <h1 className="font-extrabold text-center mb-10 font-['Rubik'] text-4xl text-white">
          SKILLS
        </h1>

        <div className="text-white font-['Roboto_Mono']">
          {/* First Category */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={html} alt="✔" />
              <h1>HTML</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={css} alt="✔" />
              <h1>CSS</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={javascript} alt="✔" />
              <h1>JavaScript</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={python} alt="✔" />
              <h1>Python</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={cpp} alt="✔" />
              <h1>C/C++</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={algo} alt="✔" />
              <h1>DSA</h1>
            </span>
          </div>
          <hr className="w-3/4 border-zinc-500 mx-auto my-6" />

          {/* Second Category */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={react} alt="✔" />
              <h1>React.js</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={next} alt="✔" />
              <h1>Next.js</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={express} alt="✔" />
              <h1>Express.js</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={node} alt="✔" />
              <h1>Node.js</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={mongo} alt="✔" />
              <h1>MongoDB</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={mysql} alt="✔" />
              <h1>MySQL</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={tailwind} alt="✔" />
              <h1>Tailwind CSS</h1>
            </span>
          </div>
          <hr className="w-3/4 border-zinc-500 mx-auto my-6" />

          {/* Third Category */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={bash} alt="✔" />
              <h1>Bash</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={linux} alt="✔" />
              <h1>Linux</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={git} alt="✔" />
              <h1>Git/GitHub</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={postman} alt="✔" />
              <h1>Postman</h1>
            </span>
            <span className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={figma} alt="✔" />
              <h1>Figma</h1>
            </span>
            <span className="flex bg-black items-center gap-2 px-4 py-2 border border-gray-600 rounded-lg">
              <img className="w-5" src={photoshop} alt="✔" />
              <h1>Photoshop</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

