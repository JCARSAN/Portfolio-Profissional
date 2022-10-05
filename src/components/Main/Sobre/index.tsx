import { Heading, HStack, VStack, Image, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";

type AboutProps = {
    scrollPosition: number;
}

export function Sobre({ scrollPosition }: AboutProps){
    console.log('Sobre: ',scrollPosition);
    const [animated,setAnimated] = useState(false);

    if(!animated && scrollPosition >= 200){
        setAnimated(true);
    }

    return(
        <VStack as="section" id="sobre" alignItems='flex-start' padding={{base:'64px 25px', md:'64px 25px'}}>
            <Heading marginBottom={50}>Sobre</Heading>
            <HStack width="100%" justifyContent="space-between" overflow="hidden">
                <HStack 
                    width="100%" 
                    marginLeft={animated?'0':'-100%'} 
                    className={animated? 'grow-right' : ''} 
                    flexDirection={{base:'column-reverse', md:'column-reverse', lg:'row'}}
                >
                    <Flex alignItems="center" paddingTop={{base: '32px',md:'32px'}} flexDirection={{base: 'column',lg: 'row'}}>
                        <Image src="/images/foto.jpg" alt="Júlio Cardoso dos Santos" boxSize="125px" borderRadius="full" margin={{base:'32px 0'}}/>
                        <VStack padding="0 32px" alignItems="flex-start">
                            <Text>
                                Meu nome é Júlio Cardoso dos Santos. Minha jornada no mundo da programação começou em 2015 quando 
                                escrevi um código pela primeira vez, um System.out.println('Olá mundo!') com Java e a partir desse
                                momento eu me encantei com o mundo da programação. 
                            </Text>
                            <Text>
                                Desde então, eu já programei 
                                em Delphi e SQL, criando funcionalidades para o sistema de gestão de crédito imobiliário da
                                empresa a qual trabalhei, desenvolvi um app de videoconferência para uma startup do ramo de
                                educação, e venho me especializando no uso das tecnologias React, NodeJs e React-Native. 
                            </Text>
                            <Text>
                                Meu principal objetivo como desenvolvedor Web e Mobile é criar sites e apps bonitos, seguros,
                                contruídos com boas práticas de programação, UI Design, SEO e que atendam às necessidades dos
                                usuários.
                            </Text>
                        </VStack>
                    </Flex>
                    <Image src="/images/lampada2.svg" alt="Criatividade é a minha marca!" width="150px" height="150px" />
                </HStack>
                
            </HStack>
        </VStack>
    )
}