import Head from 'next/head'
import HeadComponent from '../components/Head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Image from 'next/image'
import styles from '../styles/App.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <HeadComponent />
      <Header />
      <main className={styles.main}>
        <h1>Main Container</h1>
      </main>
      <Footer />
    </div>
  )
}
