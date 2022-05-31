import '../styles/globals.css'
import '@betterme-dev/web-ui-kit/src/global-styles/icons.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
