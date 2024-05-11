import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({
  bgImg,
  title,
  description,
  projectDemo,
  projectCode,
  usedArray,
}) => {
  return (
    <div className="md:grid grid-cols-3 gap-8 m-auto p-5 group">
      <div>
        <Image className="rounded-lg" src={bgImg} alt="/" />
      </div>
      <div className="col-span-2 m-auto pt-5 md:pt-0 p-1 ">
        <p className="pb-4 text-xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
          {title}
        </p>
        <p>{description}</p>
        <div className="pt-3">
          <p className="text-sm font-semibold pb-1">Technologies used:</p>
          {usedArray.map((used, i) => {
            return (
              <span
                key={i}
                className="rounded-[3px] text-xs font-bold text-[#0967d2] border border-[#0967d2] border-sky-500 m-[3px] first-of-type:ml-0 py-1 px-3 hover:bg-blue-500 hover:text-white inline-block ease-in duration-300">
                {used}
              </span>
            );
          })}
        </div>
        <Link href={projectDemo}>
          <button className="px-5 py-2 mt-4 mr-8">Demo</button>
        </Link>
        <Link href={projectCode}>
          <button className="px-5 py-2 mt-4">Code</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
