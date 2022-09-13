import { VStack, Flex, Text, Box, Heading, Image, HStack } from '@chakra-ui/react'
import { MenuNav } from '../components/MenuNav'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoSass } from 'react-icons/io'
import { FaReact, FaNode, FaLinkedin, FaInstagram, FaTelegram, FaCopyright } from 'react-icons/fa'
import { SiTypescript, SiChakraui, SiStyledcomponents, SiRedux, SiJquery, SiNextdotjs } from 'react-icons/si'
import { Main } from '../components/Main';

export default function Home() {

  const router = useRouter();

  const [imageVisible,setImageVisible] = useState(true);
  const [scroll,setScroll] = useState(0);

  function handleScroll(){
    /*
    if(document.documentElement.scrollTop >= 500){
      setScroll(1261)
      document.documentElement.scrollTo(0,1261 - window.innerHeight)
    }
    */
    //document.documentElement.scrollTo(0,scroll)
    //console.log('Está scrollando!')
    /*
    if(document.documentElement.scrollTop >= 500){
      //setImageVisible(true);
      
      document.documentElement.scrollTo(0,1261)
    }else{
      //setImageVisible(false);
    }
    */
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
      <MenuNav />
      <Main /> 
    </VStack>
  )
  
}