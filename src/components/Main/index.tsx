import { Divider, VStack } from "@chakra-ui/react";
import { Contato } from "./Contato";
import { Experiencia } from "./Experiencia";
import { Tecnologias } from "./Tecnologias";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Sobre } from "./Sobre";

type MainProps = {
    scrollPosition: number;
    deviceHeight: number;
}

export function Main( { scrollPosition,deviceHeight }: MainProps){
    //console.log("Device Height Main Contatiner: ",deviceHeight)
    return(
        <VStack as="main" width="100%" alignItems="center" justifyContent="flex-start">
            <Header />
            <Divider backgroundColor="light.100"/>
            <Sobre scrollPosition={scrollPosition} deviceHeight={deviceHeight}/>
            <Divider backgroundColor="light.100"/> 
            <Experiencia scrollPosition={scrollPosition}/>
            <Divider backgroundColor="light.100"/>
            <Tecnologias scrollPosition={scrollPosition}/>
            <Divider backgroundColor="light.100"/>
            <Portfolio scrollPosition={scrollPosition} />
            <Divider backgroundColor="light.100"/> 
            <Contato scrollPosition={scrollPosition}/>
            <Divider backgroundColor="light.100"/>
        </VStack>
    )
}