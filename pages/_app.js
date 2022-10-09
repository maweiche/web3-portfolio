import '../styles/globals.css'
import HeadComponent from '../components/Head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeadComponent />
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
