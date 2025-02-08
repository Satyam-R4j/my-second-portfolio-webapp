import React from "react";
import checkImg from "../assets/checkmark-dark.svg";

const Skills = () => {
  return (
    <>
      {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>{" "} */}
      <div className="flex justify-center  pt- bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] min-h-[80vh]">
        <div className="mx-auto w-[50wh]">
          <h1 className="font-extrabold text-center mb-16 font-['Rubik'] text-4xl text-white">
            SKILLS
          </h1>

          <div className="container text-white font-['Roboto_Mono']">
            <div className="first flex items-center justify-center gap-5 mb-8">
              <span className="flex ">
                <img className="w-5" src={checkImg} alt="" />
                <h1>HTML</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>CSS</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>JavaScript</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Python</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>C/C++</h1>
              </span>

              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>DSA</h1>
              </span>
            </div>
            <hr className="w-[20vw] border-zinc-500 mx-auto" />

            <div className="second flex items-center justify-center gap-5 my-8">
              <span className="flex ">
                <img className="w-5" src={checkImg} alt="" />
                <h1>React.js</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Next.js</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Express.js</h1>
              </span>{" "}
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Node.js</h1>
              </span>{" "}
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>MongoDB</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>MySQL</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Tailwind CSS</h1>
              </span>
            </div>
            <hr className="w-[20vw] border-zinc-500 mx-auto" />

            <div className="third flex items-center justify-center gap-5 my-8">
              <span className="flex ">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Bash</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Linux</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Git/Github</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Postman</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Figma</h1>
              </span>
              <span className="flex">
                <img className="w-5" src={checkImg} alt="" />
                <h1>Photoshop</h1>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
