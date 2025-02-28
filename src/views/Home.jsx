import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Project from '../components/Project';
import data from '../assets/data.json';


export default function Home() {
    const [info] = useState(data);
    const featuredProjects = info.projects.filter(
        (project) => project.featured === "true",
    );

    return (
    <main>
        <Hero info={info} />
        <section id="featured-projects">
          <h2 className="text-2xl font-medium mt-5">Featured projects</h2>
          {featuredProjects.map((project, index) => (
            <Project key={index} index={index} project={project} />
          ))}
          <Link to="/projects">
            <p className="text-center text-lg font-bold text-blue-500 mt-5 dark:text-white">see more projects</p>
          </Link>
        </section>
      </main>
    );
}