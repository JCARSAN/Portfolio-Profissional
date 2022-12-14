import { Heading, HStack, SimpleGrid, VStack, Flex } from "@chakra-ui/react";
import { PortfolioWork } from "./PortfolioWork";

export function Portfolio(){
    return(
        <VStack as="section" id="portfolio" alignItems={{base:"center", md:"flex-start"}} minHeight="100vh">
            <Heading as="h2">Portfólio</Heading>
            <Flex overflow="hidden" width="100%">
                <Flex>  
                    <SimpleGrid columns={{lg:3,md:1}} spacing={10} margin="auto" width={{base:'95%',lg:'100%'}}>
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
            </Flex>
        </VStack>
    )
}