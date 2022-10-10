import HeadComponent from '../components/Head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Preview from '../components/Preview/Preview'

import styles from '../styles/App.module.css'

export default function App() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <img className={styles.peeking_photo} src="/matt.png" alt="logo" />
        <Preview />
      </main>
    </div>
  )
}
