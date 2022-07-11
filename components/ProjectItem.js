import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, bgImg, projectDemo, projectCode, usedArray }) => {
  return (
    <div className="md:grid grid-cols-3 gap-8 m-auto p-5 group">
      <div className="col-span-1 relative flex items-center justify-center w-full h-auto m-auto shadow-xl shadow-gray-400 bg-gray-800 rounded-xl p-1 group-hover:scale-95 ease-in duration-300">
        <Image className="rounded-lg" src={bgImg} alt="/" />
      </div>
      <div className="col-span-2 m-auto pt-5 md:pt-0 p-1">
        <p className="pb-4 text-xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
          {title}
        </p>
        <p>
          This app was built using React JS and is hosted on Firebase. Users are
          able to search properties based on an Address, City, or ZIP code to
          retrieve a list of active properties currently for sale. You will be
          able to view property information as well as the specific location of
          the property integrated with the Google Maps API.
        </p>
        <div className="pt-3">
          <p className="text-sm font-semibold pb-1">Technologies used:</p>
          {usedArray.map((used, i) => {
            return (
              <span key={i} className="rounded-[3px] text-xs font-bold text-[#0967d2] border border-[#0967d2] border-sky-500 m-[3px] first-of-type:ml-0 py-1 px-3 hover:bg-blue-500 hover:text-white inline-block ease-in duration-300">
                {used}
              </span>
            );
          })}
        </div>
        <Link href={projectDemo}>
          <button className="px-5 py-2 mt-4 mr-8">Demo</button>
        </Link>
        <Link href={projectCode}>
          <button className="px-5 py-2 mt-4 ">Code</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
