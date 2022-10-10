import React, {useState, useEffect} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Header.module.css";


export default function Header() {
    // upon page load, add an event listener to the window object to listen for which page is active
    // pages: home, about, projects, contact
    // if the page is home, then the header will be transparent
    // if the page is not home, then the header will be solid
    // if the page is not home, then the header will have a back button
    // if the page is not home, then the header will have a menu button
    // if the page is not home, then the header will have a logo

    const router = useRouter();
    const [page, setPage] = useState("home");
    const [header, setHeader] = useState("transparent");

    // when div id logo is clicked dispatch 'logo_clicked' event to window object
    


    return (
        <div className={styles.header_container}>
                <div className={styles.header_left}>
                    <div id='logo' className={styles.header_logo}>
                        <Link href="/">
                            <a
                                onClick={() => {
                                    window.dispatchEvent(new Event('logo_clicked'));
                                }}
                            >
                                Matt Weichel | Web3 Developer
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.header_right}>
                    {/* <div className={styles.header_menu}>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </div> */}
                    <div className={styles.header_menu}>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </div>
                    {/* <div className={styles.header_menu}>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </div> */}
                </div>
        </div>

    );
}
