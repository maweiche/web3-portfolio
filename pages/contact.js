import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Contact.module.css";

const Contact = () => {
    const router = useRouter();
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setCounter(counter + 1), 1000);
        return () => clearTimeout(timer);
    }, [counter]);

    return (
        <div>
        <h1>Contact</h1>
        <p>This is the contact page</p>
        <p>Counter: {counter}</p>
        <button onClick={() => router.push("/")}>Go home</button>
        </div>
    );
};

export default Contact;