import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProjectsDisplay from "../components/Projects/ProjectsDisplay";
import styles from "../styles/Projects.module.css";

const Projects = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => setCounter(counter + 1), 1000);
        return () => clearTimeout(timer);
    }, [counter]);
    
    return (
        <div>
        <h1>Projects</h1>
        <p>This is the projects page</p>
        <p>Counter: {counter}</p>
        <button onClick={() => router.push("/")}>Go home</button>
        </div>
    );
};

export default Projects;