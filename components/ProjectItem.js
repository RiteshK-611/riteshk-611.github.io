import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, bgImg, projectUrl }) => {
  return (
    <div className="md:grid grid-cols-3 gap-8 m-auto p-5 group">
      <div className="col-span-1 relative flex items-center justify-center w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl p-1 group-hover:scale-95 ease-in duration-300">
        <Image className="rounded-lg" src={bgImg} alt="/" />
      </div>
      <div className="col-span-2 m-auto pt-5 md:pt-0 p-1">
        <p className="pb-4 text-xl font-bold group-hover:underline-offset-4 group-hover:underline ease-in duration-300">
          Project Name
        </p>
        <p className="flex text-justify">
          This app was built using React JS and is hosted on Firebase. Users are
          able to search properties based on an Address, City, or ZIP code to
          retrieve a list of active properties currently for sale. You will be
          able to view property information as well as the specific location of
          the property integrated with the Google Maps API. User authentication
          is available so you can signup & signin to your account with an email
          address in order to save your favorite properties. This is made
          possible with Zillow API.
        </p>
        <Link href={projectUrl}>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
        </Link>
        <button className="px-8 py-2 mt-4 ">Code</button>
      </div>
    </div>
  );
};

export default ProjectItem;
