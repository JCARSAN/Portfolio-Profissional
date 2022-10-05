import { Heading, HStack, VStack, Image,Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

type ContactProps = {
    scrollPosition: number;
}

export function Contato({scrollPosition} : ContactProps){
    //console.log('Section Contato: ',props.scrollPosition)
    const [animated,setAnimated] = useState(false);

    if(!animated && scrollPosition >= 2454){
        setAnimated(true);
    }

    return(
        <VStack as="section" id="contato" width="100%" alignItems="flex-start" padding={{base:'64px 25px'}}>
            <Heading as="h2">Contato</Heading>
            <VStack alignItems="flex-start" width="100%" maxWidth={1440} overflow="hidden">
                <VStack width="100%" maxWidth={1440} spacing={5} marginLeft={animated?'0':'-100%'} className={animated? 'show-element' : ''} alignItems="flex-start">
                    <Text fontSize="1.25rem" marginBottom="64px">Deseja construir um site ou um app? Entre em contato comigo!</Text>
                    <HStack width="100%" alignItems="flex-start" spacing={10}>
                        <Image src="/images/iphone-edit.png" width={100}/>
                        <VStack alignItems="flex-start" lineHeight={2} fontSize="1.25rem" height={200}>
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