import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  console.log(router.isReady)

  function handleScroll(){
    //console.log('Está scrollando!')
    if(document.documentElement.scrollTop > 500){
      console.log('500')
    }
  }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} /*onScroll={router.isReady? document.onscroll = handleScroll : null}*//>
    </ChakraProvider>
  )
}

export default MyApp
