import Layout from '../components/global/Layout'

import '../styles/globals.css'
import '../styles/nav.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
