import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import projects from "./data/projects.json";

function App() {
  return (
    <main className="bg-white px-10">
      <section>
        <nav className="py-10 mb-12 flex justify-around">
          <h1 className="text-3xl">Henry</h1>
          <ul className="flex items-center space-x-4">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li onClick={() => console.log("swtich to light / dark")}>
              <BsFillMoonStarsFill />
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <div className="text-center">
          <h2 className="text-blue-500 text-2xl py-2">
            Junior Software Developer
          </h2>
          <h3>
            Hello! I'm a recent graduate from the Northcoders bootcamp in
            Manchester. I've built multiple full-stack projects, take a look
            below!
          </h3>

          <div className="flex items-center justify-center text-2xl gap-10 py-5">
            <BsGithub />
            <BsLinkedin />
          </div>
        </div>
      </section>

      <section className="text-center py-4 flex flex-wrap justify-center gap-5">
        {/* <h2 className="text-2xl">Projects</h2> */}

        {projects.map((project) => {
          return (
            <div className="text-center shadow-lg p-10 rounded-xl border-gray-900 min-w-96">
              <div class="flex justify-center items-center"> 
              <img
                src={project.projectImage}
                width={100}
                height={100}
                alt={project.projectName}
                className="items-center"
              />
    </div> 
              
              <h3 className="text-lg font-medium">{project.projectName}</h3>

              <p className="py-2">{project.projectDescription}</p>

              <h4 className="py-4 text-teal-600">Tech staxck</h4>

              {project.projectTechStack.map((tech) => {
                return <p className="text-gray-800 py-1">{tech}</p>;
              })}

              <div className="flex justify-center gap-10 pt-5">
                <div className="border-2 border-blue-500 rounded-md p-2">
                <p>Github</p>

                </div>

                <div className="border-2 border-blue-500 rounded-md p-2">
                <p>Demo</p>
                </div>

              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default App;
