// importing it this way applied the css in that file to all the present pages
// it is convention to import it here
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
