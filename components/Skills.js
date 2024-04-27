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

const Skills = () => {
  const grp = `group py-5 flex flex-col md:flex-row justify-center items-center hover:justify-evenly dark:neumorphism-dark neumorphism-light`;
  const icon = `text-[#555555] opacity-60 group-hover:fill-blue-500 group-hover:opacity-100 ease-out duration-300 w-12 h-12 sm:w-13 sm:h-13`;
  const name = `invisible md:hidden group-hover:visible group-hover:md:block ease-in-out duration-200`;

  return (
    <div id="skills" className="w-full md:h-screen p-2 py-16">
      <div className="max-w-[1240px] m-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8">
          <div className={grp}>
            <SiHtml5 className={icon} />
            <h6 className={name}>HTML</h6>
          </div>
          <div className={grp}>
            <SiCss3 className={icon} />
            <h6 className={name}>CSS</h6>
          </div>
          <div className={grp}>
            <SiJavascript className={icon} />
            <h6 className={name}>Javascript</h6>
          </div>
          <div className={grp}>
            <SiReact className={icon} />
            <h6 className={name}>React</h6>
          </div>
          <div className={grp}>
            <SiNodedotjs className={icon} />
            <h6 className={name}>Node</h6>
          </div>
          <div className={grp}>
            <SiMongodb className={icon} />
            <h6 className={name}>MongoDB</h6>
          </div>
          <div className={grp}>
            <SiFirebase className={icon} />
            <h6 className={name}>Firebase</h6>
          </div>
          <div className={grp}>
            <SiTailwindcss className={icon} />
            <h6 className={name}>Tailwind</h6>
          </div>
          <div className={grp}>
            <SiMui className={icon} />
            <h6 className={name}>MaterialUI</h6>
          </div>
          <div className={grp}>
            <SiNpm className={icon} />
            <h6 className={name}>NPM</h6>
          </div>
          <div className={grp}>
            <SiGit className={icon} />
            <h6 className={name}>GIT</h6>
          </div>
          <div className={grp}>
            <SiGithub className={icon} />
            <h6 className={name}>Github</h6>
          </div>
          <div className={grp}>
            <SiFigma className={icon} />
            <h6 className={name}>Figma</h6>
          </div>
          <div className={grp}>
            <SiNextdotjs className={icon} />
            <h6 className={name}>Next</h6>
          </div>
          <div className={grp}>
            <SiHeroku className={icon} />
            <h6 className={name}>Heroku</h6>
          </div>
          <div className={grp}>
            <SiTypescript className={icon} />
            <h6 className={name}>Typescript</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
