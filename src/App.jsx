import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import projects from "./data/projects.json";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  const darkToggle = () => {
    console.log(dark);
    setDark(!dark);
  };

  return (
    <div className={`${dark && "dark"}`}>
      <main className="dark:bg-black">
        <section>
          <nav className="py-10 mb-12 flex justify-around">
            <h1 className="text-blue-500 text-3xl dark:text-white">Henry</h1>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="dark:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="dark:text-white">
                  Projects
                </a>
              </li>
              <li onClick={darkToggle}>
                <BsFillMoonStarsFill className="dark:bg-white" />
              </li>
            </ul>
          </nav>
        </section>

        <section>
          <div className="text-center">
            <h2 className="text-blue-500 text-4xl py-5">
              Full Stack Software Engineer
            </h2>
            <h3 className="text-xl dark:text-white">
              Hello! I'm a recent graduate from the Northcoders bootcamp in
              Manchester. I've built multiple full-stack projects, take a look
              below!
            </h3>

            <div className="flex items-center justify-center text-2xl gap-10 py-5">
              <a href="https://github.com/BulletToothTony" target="_blank">
              <BsGithub size={40} className="dark:bg-white" />
              </a>

              <a href="https://www.linkedin.com/in/henry-westhoff-lewis-b18a91196/" target="_blank">
              <BsLinkedin size={40} className="dark:bg-white" />
              </a>
            </div>
          </div>
        </section>

        <section className="text-center py-4 flex flex-wrap justify-center gap-5">
          {/* <h2 className="text-2xl">Projects</h2> */}

          {projects.map((project) => {
            return (
              <div className="text-center shadow-lg p-10 rounded-xl max-w-96 min-h-44 border-gray-900 min-w-96 dark:bg-slate-600">
                <div class="flex justify-center items-center">
                  <img
                    src={project.projectImage}
                    width={350}
                    height={150}
                    alt={project.projectName}
                    className="object-contain rounded-md h-60"
                  />
                </div>

                <h3 className="text-lg font-medium">{project.projectName}</h3>

                <p className="py-2">{project.projectDescription}</p>

                <h4 className="py-4 text-teal-600">Tech stack</h4>

                {project.projectTechStack.map((tech) => {
                  return <p className="text-gray-800 py-1">{tech}</p>;
                })}

                <div className="flex justify-center gap-10 pt-5">
                  <div className="transition ease-in-out border-2 border-blue-500 rounded-md p-2 hover:bg-blue-500 duration-400">
                    <a href={project.projectGithub} target="_blank">
                      Github
                    </a>
                  </div>

                  <div className="transition ease-in-out border-2 border-blue-500 rounded-md p-2 hover:bg-blue-500 duration-400">
                    <a href={project.projectDemo} target="_blank">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}

export default App;
