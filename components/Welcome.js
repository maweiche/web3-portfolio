import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Welcome.module.css";

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <h1 className={styles.welcome_title}>Hi, I&apos;m Matt!</h1>
            <p className={styles.welcome_description}>
                I&apos;m a software engineer and designer based in California. I&apos;m currently working on{" "}
                Web3 projects and building a community around them. I&apos;m also a Teaching Assitant for{" "}
                <a href="https://www.buildspace.so" target="_blank" rel="noopener noreferrer">
                    _buildspace
                </a>{" "}
                and the lead developer at{" "}
                <a href="https://www.ikonshop.io" target="_blank" rel="noopener noreferrer">
                    ikonshop.io
                </a>.
                <br />
                <br />
                Feel free to take a look at my{" "}
                <Link href="/projects">
                    <a>projects</a>
                </Link>{" "}
                or{" "}
                <Link href="/contact">
                    <a>contact</a>
                </Link>{" "}
                me! 
                <br />
                You can find previews of my projects in certain topics by clicking the tabs to the left!

                <br />
                <br />

                My resume is available{" "}
                <a href="/MWresume22.pdf" target="_blank" rel="noopener noreferrer">
                    here
                </a>
                .

                <br />
                <br />
                If you like this site, you can check out the{" "}
                <a href="https://github.com/maweiche/web3-portfolio" target="_blank" rel="noopener noreferrer">
                    source code
                </a>
                and fork it to make your own!
                <br />
                Cheers!
            </p>
        </div>
    )
}

export default Welcome;