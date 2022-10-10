import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Footer.module.css";
import { LogoTwitter , LogoGithub , LogoInstagram, LogoLinkedin } from 'react-ionicons';

export default function Footer() {
  const router = useRouter();
  
  return (
    <div className={styles.footer_container}>
        <LogoGithub
          color='white'
          height="5vh"
          width="5vw"
          onClick={() => router.push('https://github.com/maweiche')}
        />
        <LogoTwitter
          color='white'
          height="5vh"
          width="5vw"
          onClick={() => router.push('https://twitter.com/topshotturtles')}
        />
        <LogoInstagram
          color='white'
          height="5vh"
          width="5vw"
          onClick={() => router.push('https://www.instagram.com/matt_weichel/')}
        />
        <LogoLinkedin
          color='white'
          height="5vh"
          width="5vw"
          onClick={() => router.push('https://www.linkedin.com/in/mattweichel/')}
        />
    </div>
  );
}