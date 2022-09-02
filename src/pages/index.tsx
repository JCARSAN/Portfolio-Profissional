import { VStack, Flex, Text, Box, Heading } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { MenuNav } from '../components/MenuNav'
import { useRouter } from 'next/router'

export default function Home(props) {

  const router = useRouter();

  function handleScroll(){
    //console.log('Está scrollando!')
    if(document.documentElement.scrollTop > 400){
      console.log('está acima de 400')
    }
  }

  return (
    <VStack 
      spacing={0} 
      width="100%"
      height="auto"
      onScroll={router.isReady? document.onscroll = handleScroll : null}
    >
      <Header />
      <MenuNav />
      <VStack as="main" width="100%" height={1000} color="#fff" spacing={0}>
        <Flex as="section" id="" width="100%" justifyContent="center" backgroundColor="#000">
          <Box width="100%" maxWidth={1280}>
            <Heading as="h2">Sobre Mim</Heading>
          </Box>
        </Flex>
        <Flex as="section" id="" width="100%" justifyContent="center" backgroundColor="#473790">
          <Box width="100%" maxWidth={1280}>
            <Heading as="h2">Sobre Mim</Heading>
          </Box>
        </Flex>
        <Flex as="section" id="" width="100%" justifyContent="center" backgroundColor="#000">
          <Box width="100%" maxWidth={1280}>
            <Heading as="h2">Sobre Mim</Heading>
          </Box>
        </Flex>
        <Flex as="section" id="" width="100%" justifyContent="center" backgroundColor="#473790">
          <Box width="100%" maxWidth={1280}>
            <Heading as="h2">Sobre Mim</Heading>
          </Box>
        </Flex>
        <Flex as="section" id="" width="100%" justifyContent="center" backgroundColor="#000">
          <Box width="100%" maxWidth={1280}>
            <Heading as="h2">Sobre Mim</Heading>
          </Box>
        </Flex>
      </VStack>
    </VStack>
  )
  
}