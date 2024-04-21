import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaNpm,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiHeroku,
  SiTypescript,
} from "react-icons/si";

const Skills = () => {
  const grp = `group flex justify-center items-center hover:justify-evenly border rounded-xl border-[#5651e5]`;
  const icon = `text-[#555555] opacity-60 group-hover:fill-blue-500 group-hover:opacity-100 ease-out duration-300`;
  const name = `invisible md:hidden group-hover:visible group-hover:md:block ease-in-out duration-200`;

  return (
    <div id="skills" className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid grid-cols-3 sm:grid-cols-8 gap-2">
          <div className={`${grp} flex-col row-span-2`}>
            <FaHtml5 className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>HTML</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <FaCss3Alt className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>CSS</h6>
          </div>
          <div className={`${grp} flex-col row-span-2`}>
            <FaJsSquare className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>Javascript</h6>
          </div>
          <div className={`${grp} flex-col row-span-2`}>
            <FaReact className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>React</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <FaNode className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>Node</h6>
          </div>
          <div className={`${grp} flex-col row-span-2`}>
            <SiMongodb className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>MongoDB</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <SiFirebase className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>Firebase</h6>
          </div>
          <div className={`${grp} flex-col row-span-2`}>
            <SiTailwindcss className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>Tailwind</h6>
          </div>
          <div className={`${grp} flex-col row-span-2`}>
            <SiMui className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>MaterialUI</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <FaNpm className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>NPM</h6>
          </div>
          <div className={`${grp} flex-col row-span-2`}>
            <FaGitAlt className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>GIT</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <FaGithub className={`${icon} w-14 h-14 sm:w-16 sm:h-16`} />
            <h6 className={name}>Github</h6>
          </div>
          <div className={`${grp} flex-col row-span-2`}>
            <FaFigma className={`${icon} w-12 h-12 sm:w-14 sm:h-14`} />
            <h6 className={name}>Figma</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <SiNextdotjs className={`${icon} w-12 h-12 sm:w-14 sm:h-14`} />
            <h6 className={name}>Next</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <SiHeroku className={`${icon} w-12 h-12 sm:w-14 sm:h-14`} />
            <h6 className={name}>Heroku</h6>
          </div>
          <div className={`${grp} col-span-2 py-5`}>
            <SiTypescript className={`${icon} w-12 h-12 sm:w-14 sm:h-14`} />
            <h6 className={name}>Typescript</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
