import { Box, Heading, HStack, SimpleGrid, VStack, Image, Text, Link, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { PortfolioWork } from "./PortfolioWork";

type PortFolioProps = {
    scrollPosition: number;
}

export function Portfolio({ scrollPosition } : PortFolioProps){

    console.log('Portfólio: ',scrollPosition);
    const [animated,setAnimated] = useState(false);

    if(!animated && scrollPosition >= 1800){
        setAnimated(true);
    }

    return(
        <VStack as="section" id="portfolio" alignItems="flex-start">
            <Heading as="h2" marginLeft={{base:"8px"}}>Portfólio</Heading>
            <Flex overflow="hidden">
                <SimpleGrid columns={{lg:3,md:1}} padding={{base:"0 8px"}} spacing={10} marginLeft={animated? 0 : '-500%'} className={animated? 'grow-up' : ''}>
                    <PortfolioWork 
                        title={"VideoConferênciaApp"} 
                        src={"/images/videoconferenciaapp.png"} 
                        description={"Criação  de um aplicativo web de videoconferência com chat, compartilhamento de tela, e sistema de transferência de arquivos, usando HTML, CSS e Java-script no Front-End e NodeJs no Back-End  para a startup Hiper School, que está desenvolvendo, uma plataforma de aulas particulares online."} 
                        linkRepository={"https://github.com/JCARSAN/VideoConferenciaApp"} 
                    />
                    <PortfolioWork 
                        title={"Upload de Imagens"} 
                        src={"/images/upfi.png"} 
                        description={"Criação de um app, como exercício do curso de ReactJs da Rockeatseat, para salvar imagens do computador em uma nuvem, usando ChackraUI, NextJS, TypeScript e FaunaDB."} 
                        linkRepository={"https://github.com/JCARSAN/Upload_de_Imagens"} 
                    />
                    <PortfolioWork 
                        title={"Blog Spacetravelling"} 
                        src={"/images/spacetravellingproject.png"} 
                        description={"Criação de um blog feito com NextJS, o qual é conectado a API do CMS Prismic, onde são acessados os posts do blog e é aplicado o conceito de paginação. A estilização do site foi feita usando Sasss.  Foi realizado como exercício no curso de React da Rockeatseat."} 
                        linkRepository={"https://github.com/JCARSAN/blog-react-rocketseat"} 
                    />
                </SimpleGrid>
            </Flex>
        </VStack>
    )
}