import React from "react";
import Image from "next/image";
import Link from "next/link";
import {MdOutlinePlayArrow} from 'react-icons/md'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your average developer</p>
          <p className="py-2 text-gray-600">
            🙏🏼 Namaste, I am Ritesh Kokam from Mumbai, India. I am a Full Stack Developer. I have completed my BE degree in the field of Information Technology and graduated from Mumbai University.
            I love building projects with Javascript, React, Node and learning new technologies.
            If I have to make choice between frontend and backend, I will definitely go for frontend first.
            {/* I have spent the last 12 years in the fire service working as a
            professional firefighter & paramedic. I have always had a knack for
            technology and working with computers. In 2019 I started working
            with HTML & CSS to make some minor edits on a small business website
            that I was operating. What I thought was just a few small edits
            turned into a love for programming. */}
          </p>
          {/* <ul className="py-2 text-gray-600">
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
            <p className="py-2 text-gray-600 underline cursor-pointer hover:text-[#5651e5]">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto rounded-xl bg-gray-800 shadow-lg shadow-gray-400 p-4 hover:scale-95 ease-in duration-300">
          <img
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
