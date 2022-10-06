import { Heading, Text, HStack, VStack, SimpleGrid, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { BoxHability } from "./BoxHability";

export function Tecnologias(){

    const [descriptionText,setDescriptionText] = useState('');
    
    function handleBoxHability(text:string, id:string){
        setDescriptionText(text);
        let boxList = document.getElementsByClassName('clicked');
        
        for(let i = 0; i < boxList.length; i++){
            boxList[i].classList.remove('clicked');
        }
        
    }

    return(
        <VStack as="section" id="tecnologias" width="100%" alignItems={{base:"center", md:"flex-start"}} padding={{base:"64px 25px",md:"64px 25px"}} minHeight="100vh" data-aos="fade-up">
            <Heading as="h2" textAlign={{base:"center",md:"left"}}>Tecnologias que utilizo.</Heading>
            <SimpleGrid row={2} width="100%" overflow="hidden">
                <Text fontSize="1.1rem" textAlign={{base:"center",md:"left"}}>Clique no ícone para saber mais informações.</Text>
                <SimpleGrid>
                    <Text color="#FFF" margin="64px 0" textAlign={{base:"center",md:"left"}}>{descriptionText}</Text>
                    <SimpleGrid columns={{base:1,md:3}} maxWidth={500} spacing={25} margin={{base:'auto',md:'0'}}>
                        <Flex backgroundColor="#F0CA65" width="150px" height="150px" color="#191919" padding="10px" justifyContent="center" textAlign="center" cursor="pointer" id="0" onClick={(event) => { handleBoxHability("Criação de SPAs (Simple Pages Application) usando React, NextJs, Typescript e Sass, Chackra UI ou Styled-Components para estilização.",event.currentTarget.id); event.currentTarget.classList.add('clicked'); }}>
                            <BoxHability srcIcon={"/images/react.png"} technology={"React"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" width="150px" height="150px" color="#191919" padding="10px" justifyContent="center" textAlign="center" cursor="pointer" id="1" onClick={(event) => { handleBoxHability("Criação de APIs, consultas no banco de dados usando Prisma usando NodeJs.",event.currentTarget.id); event.currentTarget.classList.add('clicked')}}>
                            <BoxHability srcIcon={"/images/node.png"} technology={"Node"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" width="150px" height="150px" color="#191919" padding="10px" justifyContent="center" textAlign="center" cursor="pointer" id="2" onClick={(event) => { handleBoxHability("Criação de aplicativos multiplataforma para smartphones usando React Native.",event.currentTarget.id); event.currentTarget.classList.add('clicked')}}>
                            <BoxHability srcIcon={"/images/reactnative.png"} technology={"React Native"} />
                        </Flex>
                    </SimpleGrid>
                </SimpleGrid>
            </SimpleGrid>
        </VStack>
    )
}