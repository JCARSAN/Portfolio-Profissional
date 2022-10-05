import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { useRouter } from 'next/router'
import "../styles/animations.css";

function MyApp({ Component, pageProps }) {

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
