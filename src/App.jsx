import { useState } from "react";
import "./App.css";
import data from "./assets/projects.json";
import NavBar from "./components/NavBar";
import Project from "./components/Project";

function App() {
  const [projects] = useState(data.projects);
  const featuredProjects = projects.filter(
    (project) => project.featured === "true",
  );

  return (
    <>
      <NavBar />
      <section>
        {featuredProjects.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </section>
    </>
  );
}

export default App;
