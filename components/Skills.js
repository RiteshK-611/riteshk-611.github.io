import {
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiHeroku,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiFigma,
  SiNpm,
} from "react-icons/si";
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

const Skills = () => {
  const grp = `group py-5 flex flex-col md:flex-row justify-center items-center hover:justify-evenly dark:neumorphism-dark neumorphism-light relative overflow-hidden`;
  const icon = `text-[#555555] opacity-60 group-hover:fill-blue-500 group-hover:opacity-100 ease-in-out duration-10000 w-12 h-12 sm:w-13 sm:h-13`;
  const name = `invisible md:hidden group-hover:visible group-hover:md:block ease-in-out duration-200`;

  const skills = [
    { icon: <SiHtml5 className={icon} />, name: "HTML" },
    { icon: <SiCss3 className={icon} />, name: "CSS" },
    { icon: <SiJavascript className={icon} />, name: "Javascript" },
    { icon: <SiReact className={icon} />, name: "React" },
    { icon: <SiNodedotjs className={icon} />, name: "Node" },
    { icon: <SiMongodb className={icon} />, name: "MongoDB" },
    { icon: <SiFirebase className={icon} />, name: "Firebase" },
    { icon: <SiTailwindcss className={icon} />, name: "Tailwind" },
    { icon: <SiMui className={icon} />, name: "MaterialUI" },
    { icon: <SiNpm className={icon} />, name: "NPM" },
    { icon: <SiGit className={icon} />, name: "GIT" },
    { icon: <SiGithub className={icon} />, name: "Github" },
    { icon: <SiFigma className={icon} />, name: "Figma" },
    { icon: <SiNextdotjs className={icon} />, name: "Next" },
    { icon: <SiHeroku className={icon} />, name: "Heroku" },
    { icon: <SiTypescript className={icon} />, name: "Typescript" },
  ];

  return (
    <div id="skills" className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className={grp}>
              {/* <div className="absolute w-full h-full bg-red-500 opacity-80 z-10 transform transition-transform duration-500 ease-in-out group-hover:-translate-x-full">
                <div className="absolute w-3 h-1/2 bg-red-900 rounded-l-xl top-1/4 right-0 z-20"></div>
              </div> */}
              {skill.icon}
              <h6 className={name}>{skill.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
