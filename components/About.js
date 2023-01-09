import React from "react";
import Image from "next/image";
import Link from "next/link";
import {MdOutlinePlayArrow} from 'react-icons/md'
import pic from "../public/assets/profile-pic.png"

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 bg-red">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 dark:text-white">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-gray-400">I am not your average developer</p>
          <p className="py-2 text-gray-600 dark:text-gray-400">
            🙏🏼 Namaste, I am Ritesh Kokam from Mumbai, India. I am a Full Stack Developer. I have completed my graduation degree in the field of Information Technology from Mumbai University. I love building user interfaces (UI) and projects with Javascript, React, Node, and learning new technologies.
            {/* I have spent the last 12 years in the fire service working as a
            professional firefighter & paramedic. I have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML & CSS to make some minor edits on a small business website
            that I was operating. What I thought was just a few small edits
            turned into a love for programming. */}
          </p>
          {/* <ul className="py-2 text-gray-600 dark:text-gray-400">
            <li>Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.</li>
            <li>Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.</li>
          </ul> */}
          <div>
            <p>Apart from coding, designing and developing, there are few hobbies and activities that I love to do like...</p>
            <ul>
              <li className="flex items-center"><MdOutlinePlayArrow color="#5651e5" /><span className="pl-2">Photography</span></li>
              <li className="flex items-center"><MdOutlinePlayArrow color="#5651e5" /><span className="pl-2">Swimming</span></li>
              <li className="flex items-center"><MdOutlinePlayArrow color="#5651e5" /><span className="pl-2">Yoga</span></li>
              <li className="flex items-center"><MdOutlinePlayArrow color="#5651e5" /><span className="pl-2">Football</span></li>
              <li className="flex items-center"><MdOutlinePlayArrow color="#5651e5" /><span className="pl-2">Watching Movies</span></li>
              <li className="flex items-center"><MdOutlinePlayArrow color="#5651e5" /><span className="pl-2">Playing Video Games</span></li>
            </ul>
          </div>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 dark:text-gray-400 underline cursor-pointer hover:text-[#5651e5]">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto p-4 hover:scale-95 ease-in duration-300">
          <Image
            src={pic}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
