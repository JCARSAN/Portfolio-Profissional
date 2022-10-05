import { VStack, Flex, Text, Box, Heading, Image, HStack } from '@chakra-ui/react'
import { MenuNav } from '../components/MenuNav'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

export default function Home() {

  const router = useRouter();

  const [isScrolled,setIsScrolled] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll(){
    if(document.documentElement.scrollTop > 0){
      setIsScrolled(true);
    }else{
      setIsScrolled(false);
    }
    setScrollPosition(document.documentElement.scrollTop);
    console.log('Windown Inner Height: ',window.innerHeight)
    console.log('Top position: ',document.documentElement.scrollTop)
  }

  return (
    <VStack 
      spacing={0} 
      width="100%"
      alignItems="center"
      justifyContent="center"
      height="auto"
      onScroll={router.isReady? document.onscroll = handleScroll : null}
    >
      <MenuNav isScrolled={isScrolled} />
      <Main scrollPosition={scrollPosition}/>
      <Footer /> 
    </VStack>
  )
  
}