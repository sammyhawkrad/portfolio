import { useState } from "react";
import data from "../assets/data.json";
import Project from "../components/Project";
import FilterButton from "../components/FilterButton";

export default function Projects() {
    const [projects] = useState(data.projects);
    const [activeTag, setActiveTag] = useState("All");
    
    const tags = ["All", ...new Set(projects.flatMap((project) => project.tags))];
    
    const filteredProjects = projects.filter((project) => activeTag === "All" || project.tags.includes(activeTag));
    
    return (
        <>
        <main>
            <section className="text-center">
            <h2 className="text-2xl font-medium mt-5">Projects</h2>
            <div className="flex flex-wrap justify-center gap-2 mt-5">
                {tags.map((tag, index) => (
                <FilterButton
                    key={index}
                    tag={tag}
                    activeTag={activeTag}
                    setActiveTag={setActiveTag}
                />
                ))}
            </div>
            </section>
            <section>
            {filteredProjects.map((project, index) => (
                <Project key={index} index={index} project={project} />
            ))}
            </section>
        </main>
        </>
    );
    }
