import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/About.module.css";

const About = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const timer = setTimeout(() => setCounter(counter + 1), 1000);
        return () => clearTimeout(timer);
    }, [counter]);
    
    return (
        <div>
        <h1>About</h1>
        <p>This is the about page</p>
        <p>Counter: {counter}</p>
        <button onClick={() => router.push("/")}>Go home</button>
        </div>
    );
};

export default About;