import '@/styles/globals.css';
import 'aos/dist/aos.css';
import '../styles/style.css';
import '../styles/dracula.css';

import { PagebloxDndProvider } from 'pageblox-react'

export default function App({ Component, pageProps }) {
  return (
    <PagebloxDndProvider clientId="playgroundKey">
      <Component {...pageProps} />
    </PagebloxDndProvider>
  )
}