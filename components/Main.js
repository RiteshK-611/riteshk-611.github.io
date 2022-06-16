import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build Something Together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Ritesh</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Software Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a Full-Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Javascript / React / Node and some other cool libraries and frameworks. I love building beautiful interfaces, apps, and everything in between!
            {/* I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive front-end web applications while
            learning back-end technologies. */}
          </p>
          <div className="flex items-center justify-between m-auto max-w-[330px] py-4">
            <div className="rounded-full text-[#183153] bg-[#FFD43B] border-[#183153] border-x-1 border-t-1 border-b-2 shadow-lg shadow-[0_6px_0px_0px_rgba(24, 49, 83)] p-6 cursor-pointer hover:scale-95 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg text-[#5651e5] p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
