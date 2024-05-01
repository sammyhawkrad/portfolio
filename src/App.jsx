import { useState } from "react";
import "./App.css";
import data from "./assets/projects.json";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";

function App() {
  const [projects] = useState(data.projects);
  const featuredProjects = projects.filter(
    (project) => project.featured === "true",
  );

  return (
    <>
      <NavBar />
      <Home featuredProjects={featuredProjects} />
      <Footer />
    </>
  );
}

export default App;
