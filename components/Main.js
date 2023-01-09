import React from "react";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill, BsTwitter } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  const darkMode = "dark:shadow-lg dark:shadow-black dark:hover:shadow-none "

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 dark:text-gray-400">
            Let's Build Something Together
          </p>
          <h1 className="py-4 text-gray-700 dark:text-gray-600">
            Hi, I'm <span className="text-[#5651e5]">Ritesh</span>
          </h1>
          <h1 className="py-2 text-gray-700 dark:text-gray-600">A Full-Stack Software Developer</h1>
          <p className="py-4 text-gray-600 dark:text-gray-400 max-w-[70%] m-auto">
            I'm a Full-Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Javascript / React / Node and some other cool libraries and frameworks. I love building beautiful interfaces, apps, and everything in between!
            {/* I’m a front-end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive front-end web applications while
            learning back-end technologies. */}
          </p>
          <div className="flex items-center justify-evenly m-auto md:max-w-[50%] py-4">
            {/* <div className="rounded-full text-[#183153] bg-[#FFD43B] border-[#183153] border-x-1 border-t-1 border-b-2 shadow-lg shadow-[0_6px_0px_0px_rgba(24, 49, 83)] p-6 cursor-pointer hover:scale-95 ease-in duration-300">
              <FaLinkedinIn />
            </div> */}
            <Link href="https://twitter.com/riteshkokam">
              <div className={darkMode + "rounded-full shadow-xl text-[#5651e5] p-6 cursor-pointer hover:shadow-none ease-in duration-300"}>
                <BsTwitter />
              </div>
            </Link>
            <Link href="https://instagram.com/ritesh_kokam">
              <div className={darkMode + "rounded-full shadow-xl text-[#5651e5] p-6 cursor-pointer hover:shadow-none ease-in duration-300"}>
                <AiFillInstagram />
              </div>
            </Link>
            <Link href="https://linkedin.com/in/ritesh-kokam/">
              <div className={darkMode + "rounded-full shadow-xl text-[#5651e5] p-6 cursor-pointer hover:shadow-none ease-in duration-300"}>
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/RiteshK-611">
              <div className={darkMode + "rounded-full shadow-xl text-[#5651e5] p-6 cursor-pointer hover:shadow-none ease-in duration-300"}>
                <FaGithub />
              </div>
            </Link>
            <Link href="mailto:riteshkokam@gmail.com">
              <div className={darkMode + "rounded-full shadow-xl text-[#5651e5] p-6 cursor-pointer hover:shadow-none ease-in duration-300"}>
                <AiOutlineMail />
              </div>
            </Link>
            {/* <Link href="/#home">
              <div className={darkMode + "rounded-full shadow-xl text-[#5651e5] p-6 cursor-pointer hover:shadow-none ease-in duration-300"}>
                <BsFillPersonLinesFill />
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
