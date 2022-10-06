import { Heading, Text, HStack, VStack, SimpleGrid, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { BoxHability } from "./BoxHability";
import { TbBrandReactNative } from 'react-icons/tb'

type HabilityProps = {
    scrollPosition: number;
    animationPosition: number;
}

export function Tecnologias({scrollPosition, animationPosition} : HabilityProps){

    const [descriptionText,setDescriptionText] = useState('');

    //console.log('Scroll Top: ',scrollPosition);
    //console.log('Tamanho da janela: ',window.innerHeight);
    //console.log('Outher height: ',window.outerHeight);

    const [animated,setAnimated] = useState(false);

    if(!animated && scrollPosition >= animationPosition){
        setAnimated(true);
    }

    function handleBoxHability(text:string, id:string){
        setDescriptionText(text);
        let boxList = document.getElementsByClassName('clicked');
        
        for(let i = 0; i < boxList.length; i++){
            boxList[i].classList.remove('clicked');
        }
        
    }

    return(
        <VStack as="section" id="tecnologias" width="100%" alignItems={{base:"center", md:"flex-start"}} padding={{base:"64px 25px",md:"64px 25px"}}>
            <Heading as="h2">Tecnologias que utilizo.</Heading>
            <SimpleGrid row={2} spacing="32px" width="100%" overflow="hidden">
                <Text fontSize="1.1rem">Clique no ícone para saber mais informações.</Text>
                <SimpleGrid marginLeft={animated?'0':'-100%'} className={animated? 'grow-right' : ''}>
                    <Text color="#FFF" margin="64px 0">{descriptionText}</Text>
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
            { /*
            <SimpleGrid row={2} spacing="32px" width="100%" overflow="hidden">
                <Text fontSize="1.1rem">Clique no ícone para saber mais informações.</Text>
                <SimpleGrid columns={2} marginLeft={animated?'100%':'0'} className={animated? 'grow-right' : ''}>
                    <SimpleGrid columns={{base:2,md:3,lg:4}} maxWidth={500} spacing={25}>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="0" onClick={(event) => { handleBoxHability("Tratamento de eventos, programação funcional, programação orientada a objetos e ES6.",event.currentTarget.id); event.currentTarget.classList.add('clicked'); }}>
                            <BoxHability srcIcon={"/images/js.png"} technology={"Javascript"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="1" onClick={(event) => { handleBoxHability("HTML5 semântico, SEO.",event.currentTarget.id); event.currentTarget.classList.add('clicked') }}>
                            <BoxHability srcIcon={"/images/html.png"} technology={"HTML"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="2" onClick={(event) => { handleBoxHability("CSS3, animações com keyframes, responsividade com media queries e Layout de sites com Flexbox e CSSGrid.",event.currentTarget.id); event.currentTarget.classList.add('clicked')} }>
                            <BoxHability srcIcon={"/images/css.png"} technology={"CSS"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="3" onClick={(event) => { handleBoxHability("Criação de single pages com React e domínio das ferramentas do framework como ContextAPI, Hooks, Redux e comunicação com o Back-End.",event.currentTarget.id); event.currentTarget.classList.add('clicked')}}>
                            <BoxHability srcIcon={"/images/react.png"} technology={"React"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="4" onClick={(event) => { handleBoxHability("Criação de folhas de estilo com Sass.",event.currentTarget.id); event.currentTarget.classList.add('clicked')} }>
                            <BoxHability srcIcon={"/images/sass.png"} technology={"Sass"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="5" onClick={(event) => { handleBoxHability("Utilização do Chackra UI para criar componentes e páginas responsivas com o React.",event.currentTarget.id); event.currentTarget.classList.add('clicked')}}>
                            <BoxHability srcIcon={"/images/chackra.png"} technology={"Chackra UI"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="6" onClick={(event) => { handleBoxHability("Utilização do framework NextJs, que renderização no lado do servidor e geração de sites estáticos usando React.",event.currentTarget.id); event.currentTarget.classList.add('clicked')}}>
                            <BoxHability srcIcon={"/images/nextjs.png"} technology={"NextJs"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="7" onClick={(event) => { handleBoxHability("Domínio da semântica do Typescript.",event.currentTarget.id); event.currentTarget.classList.add('clicked')}}>
                            <BoxHability srcIcon={"/images/typescript.png"} technology={"Typescript"} />
                        </Flex>
                        <Flex backgroundColor="#F0CA65" color="#191919" padding="10px" textAlign="center" cursor="pointer" id="8" onClick={(event) => { handleBoxHability("Criação de API e sites dinâmicos utilizando o padrão MVC.",event.currentTarget.id); event.currentTarget.classList.add('clicked')}}>
                            <BoxHability srcIcon={"/images/node.png"} technology={"Node"} />
                        </Flex>
                    </SimpleGrid>               
                    <Text color="#FFF" marginLeft={{base:'15px', md:'15px'}}>{descriptionText}</Text>
                </SimpleGrid>
            </SimpleGrid>
            */}
        </VStack>
    )
}