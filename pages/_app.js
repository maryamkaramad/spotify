
import '../styles/globals.css'
import Layout from './../componens/layout/Layout';
import { ThemeProvider } from 'next-themes'
import { theme } from "../theme/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </ThemeProvider>
  )
}


