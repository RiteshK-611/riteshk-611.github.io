import React from "react";
import ProjectItem from "./ProjectItem";
import img from "../public/assets/projects/netflix.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid grid-rows-4 gap-8">
          <ProjectItem title="Project" bgImg={img} projectUrl="https://github.com/" />
          <ProjectItem title="Project" bgImg={img} projectUrl="https://github.com/" />
          <ProjectItem title="Project" bgImg={img} projectUrl="https://github.com/" />
          <ProjectItem title="Project" bgImg={img} projectUrl="https://github.com/" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
