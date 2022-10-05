import { Heading, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, UnorderedList, List, VStack, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { Icon } from '@chakra-ui/react'
import { BiRightArrow } from 'react-icons/bi';

type ExperienciaProps = {
    scrollPosition: number;
}

export function Experiencia({ scrollPosition } : ExperienciaProps){

    const [animated,setAnimated] = useState(false);

    if(!animated && scrollPosition >= 900){
        setAnimated(true);
    }

    return(
        <VStack as="section" id="experiencia" alignItems={{base:"center", md:"flex-start"}}>
            <Heading as="h2">Onde trabalhei?</Heading>
            <HStack width="100%" overflow="hidden">
                <Tabs variant='enclosed' width="100%" marginLeft={animated?'0':'-100%'} className={animated? 'grow-right' : ''} >
                    <TabList>
                        <Tab backgroundColor="#F0CA65" color="#191919" _selected={{color:'#191919', backgroundColor:'#FFF'}}fontSize={{base:'0.9rem'}}>Agência Clicksoft</Tab>
                        <Tab backgroundColor="#F0CA65" color="#191919" _selected={{color:'#191919', backgroundColor:'#FFF'}} margin="0 5px" fontSize={{base:'0.9rem'}}>Prognum Informática</Tab>
                        <Tab backgroundColor="#F0CA65" color="#191919" _selected={{color:'#191919', backgroundColor:'#FFF'}} fontSize={{base:'0.9rem'}}>Hiper School App</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel padding="32px 10px">
                            <Heading as="h3" fontSize="1.25rem">Estagiário em Desenvolvimento Front-End.</Heading>
                            <Text margin="25px 0" fontSize="1.1rem">Período: 2016.</Text>
                            <VStack alignItems="flex-start">
                                <Text fontSize="1.25rem" marginBottom="25px">Descrição: </Text>
                                <List spacing={3}>
                                    <ListItem display="flex" alignItems="center">
                                        <Icon as={BiRightArrow} color="#F0CA65" marginRight={2} />
                                        Manutenção dos sites dos clientes da agência, fazendo alterações no HTML, CSS e Javascript conforme solicitação dos clientes.
                                    </ListItem>
                                    <ListItem display="flex" alignItems="center">
                                        <Icon as={BiRightArrow} color="#F0CA65" marginRight={2}/>
                                        Criação de sites estáticos utilizando HTML, CSS e Javascript conforme layout desenvolvido pela equipe de Design.
                                    </ListItem>
                                    <ListItem display="flex" alignItems="center">
                                        <Icon as={BiRightArrow} color="#F0CA65" marginRight={2} />
                                        Modelagem de telas de aplicativos Web e Mobile usando Mockups.
                                    </ListItem>
                                </List>
                            </VStack>
                        </TabPanel>
                        <TabPanel padding="32px 10px">
                            <Heading as="h3" fontSize="1.25rem">Desenvolvedor Backend.</Heading>
                            <Text margin="25px 0" fontSize="1.1rem">Período: Jul/2017 - Ago/2019</Text>
                            <VStack alignItems="flex-start">
                                <Text fontSize="1.25rem" marginBottom="25px">Descrição: </Text>
                                <List spacing={3}>
                                    <ListItem display="flex" alignItems="center">
                                        <Icon as={BiRightArrow} color="#F0CA65" marginRight={2}/> 
                                        Criação de funcionalidades no sistema de gestão de crédito imobiliário da empresa usando Delphi e SQL. 
                                    </ListItem>
                                    <ListItem display="flex" alignItems="center">
                                        <Icon as={BiRightArrow} color="#F0CA65" marginRight={2}/>
                                        Consulta e manipulação de dados com Oracle Database e Microsoft SQL Server.
                                    </ListItem>
                                    <ListItem display="flex" alignItems="center">
                                        <Icon as={BiRightArrow} color="#F0CA65" marginRight={2}/>
                                        Criação de telas usando XML conforme layout definido pela equipe de Design.
                                    </ListItem>
                                </List>
                            </VStack>
                        </TabPanel>
                        <TabPanel padding="32px 10px">
                            <Heading as="h3" fontSize="1.25rem">Freelancer.</Heading>
                            <Text margin="25px 0" fontSize="1.1rem">Período: 2020 - Jan/2022.</Text>
                            <VStack alignItems="flex-start">
                                <Text fontSize="1.25rem" marginBottom="25px">Descrição: </Text>
                                <List spacing={3}>
                                    <ListItem display="flex" alignItems="center">
                                        <Icon as={BiRightArrow} color="#F0CA65" marginRight={2}/>
                                        Criação de um aplicativo de videoconferência usando NodeJs no backend, HTML, CSS e JavaScript e WebRTC no frontend.
                                    </ListItem>
                                </List>
                            </VStack>
                        </TabPanel>
                    </TabPanels>         
                </Tabs>
            </HStack>
        </VStack>
    )
}