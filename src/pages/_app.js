import '@/styles/globals.css';
import 'aos/dist/aos.css';
import '../styles/style.css';
import '../styles/dracula.css';

import { PagebloxProvider } from 'pageblox-react'
import 'pageblox-react/dist/index.css'

export default function App({ Component, pageProps }) {
  return (
    <PagebloxProvider clientId="playgroundKey">
      <Component {...pageProps} />
    </PagebloxProvider>
  )
}