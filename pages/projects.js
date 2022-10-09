import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { projects } from "../pages/api/projects";
import ProjectsDisplay from "../components/Projects/ProjectsDisplay";
import styles from "../styles/Projects.module.css";

const Projects = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(0);
    const [allProjects, setAllProjects] = useState(null);
    
    useEffect(() => {
        const timer = setTimeout(() => setCounter(counter + 1), 1000);
        return () => clearTimeout(timer);
    }, [counter]);

    useEffect(() => {
        setAllProjects(projects);
    }, []);
    
    return (
        <div className={styles.project_container}>
            {allProjects && allProjects.map((project, index) => (
             <ProjectsDisplay key={index} project={project} />
            ))}
        </div>
    );
};

export default Projects;