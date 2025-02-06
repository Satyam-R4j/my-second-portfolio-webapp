import React from "react";
import MyImg from "../../assets/hero-img.png";
import themeIcon from "../../assets/moon.svg";
import twitterIcon from "../../assets/twitter-dark.svg";
import githubIcon from "../../assets/github-dark.svg";
import linkedinIcon from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/Themecontext";

export const Landingpage = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <section className="bg-zinc-800    min-h-screen">
      <div className="">
        <img className="" src={MyImg} alt="Profile picture of Satyam Raj" />
        <img onClick={toggleTheme} src={themeIcon} alt="theme icons" />
      </div>
      <div className="text-white">
        <h1 className="text-5xl">
          Satyam <br />
          R4j
        </h1>
        <h2 className="text-xl">MERN stack Developer</h2>
        <span>
          <a href="https://x.com/satyamraj2104" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/Satyam-R4j" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
          <a href="https://x.com/satyamraj2104" target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p>
          With a passion for developing modern React web app for commercial
          businesses.
        </p>
        <a href={CV}>
          <button>Resume</button>
        </a>
      </div>
    </section>
  );
};
