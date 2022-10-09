import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export default function Footer() {
  const router = useRouter();
  
  return (
    <div className={styles.footer_container}>
        FOOTER...
    </div>
  );
}