import { useState } from "react";
import "./App.css";
import data from "./assets/projects.json";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  const [projects] = useState(data.projects);
  const featuredProjects = projects.filter(
    (project) => project.featured === "true",
  );

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <section id="featured-projects">
          <h2 className="text-2xl font-medium mt-5">Featured projects</h2>
          {featuredProjects.map((project, index) => (
            <Project key={index} index={index} project={project} />
          ))}
          <p className="text-center text-lg font-bold text-blue-500 mt-5"><a href="">see more projects</a></p>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
