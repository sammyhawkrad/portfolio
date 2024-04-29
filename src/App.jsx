import { useState } from "react";
import "./App.css";
import data from "./assets/projects.json";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Hero from "./components/Hero";

function App() {
  const [projects] = useState(data.projects);
  const featuredProjects = projects.filter(
    (project) => project.featured === "true",
  );

  return (
    <>
      <NavBar />
      <Hero />
      <section id="featured-projects">
        <h2 className="text-2xl font-medium">Featured projects</h2>
        {featuredProjects.map((project, index) => (
          <Project key={index} index={index} project={project} />
        ))}
      </section>
    </>
  );
}

export default App;
