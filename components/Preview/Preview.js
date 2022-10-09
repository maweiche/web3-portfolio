import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Preview.module.css";

export default function Preview() {
    const router = useRouter();
    const [projectToPreview, setProjectToPreview] = useState(null);
    const [activeProject, setActiveProject] = useState(null);
    const [activeProjectDetails, setActiveProjectDetails] = useState(null);
    
    const tabs = [
        'JavaScript',
        'Solana',
        'Ethereum',
    ];

    const JavaScript = [
        {
            name: 'Next.js',
            description: 'The React Framework for Production',
            url: 'https://nextjs.org/',
            image: 'https://nextjs.org/static/images/nextjs-logo.png',
        },
        {
            name: 'React',
            description: 'A JavaScript library for building user interfaces',
            url: 'https://reactjs.org/',
            image: 'https://reactjs.org/logo-og.png',
        },
        {
            name: 'Node.js',
            description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
            url: 'https://nodejs.org/en/',
            image: 'https://nodejs.org/static/images/logo.svg',
        },
    ];

    const Solana = [
        {
            name: 'Solana',
            description: 'Solana is a high-performance blockchain for decentralized applications and marketplaces',
            url: 'https://solana.com/',
            image: 'https://solana.com/static/branding/branding.png',
        },
        {
            name: 'Phantom Wallet',
            description: 'Phantom is a secure, open-source, non-custodial wallet for Solana',
            url: 'https://phantom.app/',
            image: 'https://phantom.app/static/branding/branding.png',
        },
        {
            name: 'Solflare',
            description: 'Solflare is a non-custodial wallet for Solana',
            url: 'https://solflare.com/',
            image: 'https://solflare.com/static/branding/branding.png',
        },
    ];

    const Ethereum = [
        {
            name: 'Ethereum',
            description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality',
            url: 'https://ethereum.org/',
            image: 'https://ethereum.org/static/branding/branding.png',
        },
        {
            name: 'MetaMask',
            description: 'MetaMask is a browser extension that allows you to interact with the Ethereum blockchain',
            url: 'https://metamask.io/',
            image: 'https://metamask.io/static/images/metamask-fox.svg',
        },
        {
            name: 'Etherscan',
            description: 'Etherscan is a block explorer and analytics platform for Ethereum',
            url: 'https://etherscan.io/',
            image: 'https://etherscan.io/images/brand-assets/etherscan-logo.svg',
        },
    ];

    useEffect(() => {
        if (router.query.project) {
            setProjectToPreview(router.query.project);
        }
    }, [router.query.project]);

    useEffect(() => {
        console.log(projectToPreview);
        if (projectToPreview) {
            if (projectToPreview === 'JavaScript') {
                console.log('projectToPreview is JavaScript');
                setActiveProject(JavaScript);
                setActiveProjectDetails({
                    name: 'JavaScript Projects',
                    description: 'JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.',
                    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
                })
            } else if (projectToPreview === 'Solana') {
                console.log('projectToPreview is Solana');
                setActiveProject(Solana);
                setActiveProjectDetails({
                    name: 'Solana Projects',
                    description: 'Solana is a high-performance blockchain for decentralized applications and marketplaces.',
                    url: 'https://solana.com/',
                    image: 'https://solana.com/_next/static/media/solanaLogoMark.17260911.svg',
                })
            } else if (projectToPreview === 'Ethereum') {
                console.log('projectToPreview is Ethereum');
                setActiveProject(Ethereum);
                setActiveProjectDetails({
                    name: 'Ethereum Projects',
                    description: 'Ethereum is a decentralized, open-source blockchain with smart contract functionality. All projects have been deployed via testnet.',
                    image: 'https://ethereum.org/static/0453c88b09ddaa2c7e7552840c650ad2/1f265/finance_transparent.webp',
                    url: 'https://ethereum.org/',
                })
            }
        }
    }, [projectToPreview]);



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
            <div className={styles.project_container}>
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
                {activeProjectDetails && (
                    <div className={styles.project_display}>
                        
                        <div className={styles.project_image}>
                            <img src={activeProjectDetails.image} alt={activeProjectDetails.name} />
                        </div>
                        <div className={styles.project_description}>
                            <p>
                                {activeProjectDetails.description}
                            </p>
                            <div className={styles.project_link}>
                                <Link href={activeProjectDetails.url}>
                                    <a target="_blank">
                                        {activeProjectDetails.name}
                                    </a>
                                </Link>
                        </div>
                        </div>
                        
                        
                    </div>
                )}
            </div>
        </div>
    );
}

// Language: javascript
// Path: components/Projects/ProjectsDisplay.js


    