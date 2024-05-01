import { NavLink } from 'react-router-dom';
import Hero from '../components/Hero';
import Project from '../components/Project';
import PropTypes from "prop-types";



export default function Home({featuredProjects}) {
    return (
    <main>
        <Hero />
        <section id="featured-projects">
          <h2 className="text-2xl font-medium mt-5">Featured projects</h2>
          {featuredProjects.map((project, index) => (
            <Project key={index} index={index} project={project} />
          ))}
          <NavLink to="/projects">
            <p className="text-center text-lg font-bold text-blue-500 mt-5">see more projects</p>
          </NavLink>
        </section>
      </main>
    );
}

Home.propTypes = {
  featuredProjects: PropTypes.array.isRequired
};