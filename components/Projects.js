import React from "react";
import ProjectItem from "./ProjectItem";
import inar from "../public/assets/projects/inar.jpg";
import amazon from "../public/assets/projects/amazon.jpg";
import weather from "../public/assets/projects/weather.jpg";
import hulu from "../public/assets/projects/hulu.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full md:h-full p-2 py-16">
      <div className="max-w-[1240px] m-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid grid-rows-4 gap-8">
          <ProjectItem
            bgImg={inar} 
            title="InAR"
            description="In Augmented Reality (InAR). It is an Augmented Reality (AR) based Ecommerce application. It uses Web-based AR or WebAR to place furniture/product in your environment, to get clear knowledge of whether this product fits in our environment before buying it out."
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
            bgImg={amazon}
            title="Amazon Clone"
            description="It is a full-stack e-commerce application. It includes all the basic features like add-to-cart, login/signup, cart payment, etc with some additional features like add to cart pop-up, animations, and better user experience."
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
            bgImg={weather}
            title="City Weather"
            description="It is a Progressive Web Application (PWA) that shows the weather status of the city. It uses OpenWather API to get the data. It shows up Climate, Temperature, Wind speed, Visibility, and Air Quality of the city."
            projectDemo="https://city-weather-report.netlify.app"
            projectCode="https://github.com/RiteshK-611/weather-app"
            usedArray={[
              "React",
              "Javascript",
              "PWA"
            ]}
          />
          <ProjectItem
            bgImg={hulu}
            title="Hulu UI Clone"
            description="It is a user interface (UI) of the landing page of the HULU app. It uses TheMovieDatabase (TMDB) API to get movie data. It display movies of different genres and shows an overview of the movie upon the card hovering."
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
