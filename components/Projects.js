import React from "react";
import ProjectItem from "./ProjectItem";
import inar from "../public/assets/projects/inar.jpg";
import amazon from "../public/assets/projects/amazon.jpg";
import weather from "../public/assets/projects/weather.jpg";
import hulu from "../public/assets/projects/hulu.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid grid-rows-4 gap-8">
          <ProjectItem
            title="InAR"
            bgImg={inar} 
            projectDemo="https://inar-shop.herokuapp.com"
            projectCode="https://github.com/RiteshK-611/WebAR_Furnishing"
            usedArray={[
              "React",
              "Javascript",
              "Node",
              "MongoDB",
              "MaterialUI",
              "Figma",
              "WebAR"
            ]}
          />
          <ProjectItem
            title="Amazon Clone"
            bgImg={amazon}
            projectDemo="https://amazon-shopping.vercel.app"
            projectCode="https://github.com/RiteshK-611/e-commerce"
            usedArray={[
              "React",
              "Javascript",
              "Node",
              "Firebase",
              "MaterialUI",
              "Stripe"
            ]}
          />
          <ProjectItem
            title="City Weather"
            bgImg={weather}
            projectDemo="https://city-weather-report.netlify.app"
            projectCode="https://github.com/RiteshK-611/weather-app"
            usedArray={[
              "React",
              "Javascript",
              "PWA"
            ]}
          />
          <ProjectItem
            title="Hulu UI Clone"
            bgImg={hulu}
            projectDemo="https://hulu-watch.vercel.app/"
            projectCode="https://github.com/RiteshK-611/hulu"
            usedArray={[
              "React",
              "Nextjs",
              "Javascript",
              "TailwindCSS"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
