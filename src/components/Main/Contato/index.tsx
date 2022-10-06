import { Heading, HStack, VStack, Image,Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

type ContactProps = {
    scrollPosition: number;
    animationPosition: number
}

export function Contato({scrollPosition, animationPosition} : ContactProps){
    const [animated,setAnimated] = useState(false);

    if(!animated && scrollPosition >= animationPosition){
        setAnimated(true);
    }

    return(
        <VStack as="section" id="contato" width="100%" alignItems={{base:"center", md:"flex-start"}} padding={{base:'64px 10px'}}>
            <Heading as="h2">Contato</Heading>
            <VStack alignItems="flex-start" width="100%" maxWidth={1440} overflow="hidden">
                <VStack width="100%" maxWidth={1440} spacing={10} marginLeft={animated?'0':'-100%'} className={animated? 'show-element' : ''} alignItems={{base:'center', md:'flex-start'}}>
                    <Text fontSize="1.25rem" textAlign={{base:'center',md:'left'}}>Deseja construir um site ou um app? Entre em contato comigo!</Text>
                    <Link
                        href="mailto:jcarsan1000@gmail.com"
                        display="flex"
                        backgroundColor="#F0CA65"
                        color="#000"
                        width="200px"
                        height="50px"
                        alignItems="center"
                        justifyContent="center"
                        borderRadius={40}
                        fontSize="1.1rem"
                        marginBottom="32px"
                    >
                        Enviar e-mail
                    </Link>
                    <HStack width="100%" alignItems="flex-start" spacing={{base:2, md:5}} justifyContent={{base:"center",md:'flex-start'}}>
                        <Image src="/images/iphone-edit.png" width={50}/>
                        <VStack alignItems={{base:'flex-start'}} lineHeight={2} fontSize={{base:'1rem', md:"1.25rem"}}>
                            <Text>Whatsapp: 55(21)99205-6323</Text>
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