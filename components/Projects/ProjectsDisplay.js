import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./ProjectsDisplay.module.css";

export default function Projects() {
    const router = useRouter();
    
    return (
        <div className={styles.projects_container}>
            PROJECTS...
        </div>
    );
}