import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Preview.module.css";
import { projects } from "../../pages/api/projects";
import Welcome from "../Welcome";

export default function Preview() {
    const router = useRouter();
    const [projectToPreview, setProjectToPreview] = useState(null);
    const [activeProject, setActiveProject] = useState(null);
    const [activeProjectDetails, setActiveProjectDetails] = useState(null);
    const [allProjects, setAllProjects] = useState(null);

    const [javaScriptProjects, setJavaScriptProjects] = useState(null);
    const [solanaProjects, setSolanaProjects] = useState(null);
    const [ethereumProjects, setEthereumProjects] = useState(null);


    
    const tabs = [
        'JavaScript',
        'Solana',
        // 'Ethereum',
    ];

   

    useEffect(() => {
        console.log(projectToPreview);
        if (projectToPreview) {
            if (projectToPreview === 'JavaScript') {
                console.log('projectToPreview is JavaScript');
                setActiveProject(javaScriptProjects);
                setActiveProjectDetails({
                    name: 'JavaScript',
                    description: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                })
            } else if (projectToPreview === 'Solana') {
                console.log('projectToPreview is Solana');
                setActiveProject(solanaProjects);
                setActiveProjectDetails({
                    name: 'Solana',
                    description: 'Solana is a high-performance blockchain for decentralized applications and marketplaces.',
                    url: 'https://solana.com/',
                    image: 'https://solana.com/_next/static/media/solanaLogoMark.17260911.svg',
                })
            } else if (projectToPreview === 'Ethereum') {
                console.log('projectToPreview is Ethereum');
                setActiveProject(ethereumProjects);
                setActiveProjectDetails({
                    name: 'Ethereum',
                    description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. All projects have been deployed via testnet.',
                    image: 'https://ethereum.org/static/0453c88b09ddaa2c7e7552840c650ad2/1f265/finance_transparent.webp',
                    url: 'https://ethereum.org/',
                })
            }
        }
    }, [projectToPreview]);

    
    useEffect(() => {
        const allProjects = projects;
        console.log('allProjects', allProjects);
        setAllProjects(allProjects);

        // filter allProjects to find projects with JavaScript tag
        const javaScriptProjects = allProjects.filter(project => project.tags.includes('JavaScript'));
        console.log('javaScriptProjects', javaScriptProjects);
        setJavaScriptProjects(javaScriptProjects);

        // filter allProjects to find projects with Solana tag
        const solanaProjects = allProjects.filter(project => project.tags.includes('Solana'));
        console.log('solanaProjects', solanaProjects);
        setSolanaProjects(solanaProjects);

        // filter allProjects to find projects with Ethereum tag
        const ethereumProjects = allProjects.filter(project => project.tags.includes('Ethereum'));
        console.log('ethereumProjects', ethereumProjects);
        setEthereumProjects(ethereumProjects);

        window.addEventListener('logo_clicked', (e) => {
            setActiveProjectDetails(null);
        }
        )
        

    }, []);



    return (
        <div className={styles.preview_container}>
            <div className={styles.tab_container}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={styles.tab}
                        onClick={() => setProjectToPreview(tab)}
                    >
                        {tab}
                    </div>
                ))}
            </div>
            <div id='preview_container' className={styles.project_container}>
                <div className={styles.project_tabs}>
                    {activeProject && (
                        activeProject.map((project, index) => (
                            <div
                                key={index}
                                className={styles.project_tab}
                                onClick={() => setActiveProjectDetails(project)}
                            >
                                {project.name}
                            </div>
                    )))}
                </div>
                {activeProjectDetails ? (
                    <div className={styles.project_display}>
                        
                        <div className={styles.project_image}>
                            <img src={activeProjectDetails.image} alt={activeProjectDetails.name} />
                        </div>
                        <div className={styles.project_description}>
                            <p>
                                {activeProjectDetails.description}
                            </p>
                            <div className={styles.project_link}>
                                <span>Site: </span>
                                <Link href={activeProjectDetails.url}>
                                    
                                    <a target="_blank">
                                        {activeProjectDetails.name}
                                    </a>
                                </Link>
                        </div>
                        </div>
                        
                        
                    </div>
                )
                : 
                (
                    <Welcome />
                )}
            </div>
        </div>
    );
}

// Language: javascript
// Path: components/Projects/ProjectsDisplay.js


    