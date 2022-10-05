import { Heading, HStack, VStack, Image,Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

type ContactProps = {
    scrollPosition: number;
}

export function Contato({scrollPosition} : ContactProps){
    const [animated,setAnimated] = useState(false);

    if(!animated && scrollPosition >= 2454){
        setAnimated(true);
    }

    return(
        <VStack as="section" id="contato" width="100%" alignItems={{base:"center", md:"flex-start"}} padding={{base:'64px 10px'}}>
            <Heading as="h2">Contato</Heading>
            <VStack alignItems="flex-start" width="100%" maxWidth={1440} overflow="hidden">
                <VStack width="100%" maxWidth={1440} spacing={5} marginLeft={animated?'0':'-100%'} className={animated? 'show-element' : ''} alignItems="flex-start">
                    <Text fontSize="1.25rem" marginBottom="64px">Deseja construir um site ou um app? Entre em contato comigo!</Text>
                    <HStack width="100%" alignItems="flex-start" spacing={{base:2, md:5}}>
                        <Image src="/images/iphone-edit.png" width={100}/>
                        <VStack alignItems={{base:'center',md:"flex-start"}} lineHeight={2} fontSize={{base:'1rem', md:"1.25rem"}}>
                            <Text>E-mail: jcarsan1000@gmail.com</Text>
                            <Text>Whatsapp: (21)99205-6323</Text>
                            <HStack fontSize="2rem" width="100%" spacing={30}>
                                <Link href="https://www.linkedin.com/in/julio-cardoso-834000b5/" isExternal>
                                    <FaLinkedin />
                                </Link>
                                <Link href="https://www.instagram.com/julio.c.dossantos/?hl=pt-br" isExternal>
                                    <FaInstagram />
                                </Link>
                                <Link>
                                    <FaTelegram />
                                </Link>
                            </HStack>
                        </VStack>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    )
}