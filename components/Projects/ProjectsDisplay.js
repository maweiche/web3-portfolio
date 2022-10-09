import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ProjectsDisplay.module.css";
import { projects } from "../../pages/api/projects";


export default function Projects(obj) {
    const router = useRouter();
    const project = obj.project
    
    return (
        <div className={styles.project_card}>
            <div className={styles.project_title}>
                {project.name}
            </div>
            <div className={styles.project_description}>
                <p>
                    {project.description}
                </p>
            </div>
            <div className={styles.project_link}>
                <Link href={project.url}>
                    <a target="_blank">
                        {project.name}
                    </a>
                </Link>
            </div>
            <div className={styles.project_tags}>
                {project.tags.map((tag, index) => (
                    <div key={index} className={styles.project_tag}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}