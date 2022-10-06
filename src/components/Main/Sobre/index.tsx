import { Heading, HStack, VStack, Image, Text, Flex } from "@chakra-ui/react";

export function Sobre(){
    return(
        <VStack as="section" id="sobre" alignItems={{base:"center", md:"center"}} justifyContent="space-between" padding={{base:"32px 16px",lg:"32px 16px"}} minHeight="100vh" data-aos="fade-right">
            <Heading>Sobre</Heading>
            <HStack width="100%" justifyContent="space-between" overflow="hidden">
                <HStack 
                    width="100%" 
                    flexDirection={{base:'column-reverse', md:'column-reverse', lg:'row'}}

                >
                    <Flex alignItems="center" flexDirection={{base: 'column',lg: 'row'}} >
                        <Image src="/images/foto.jpg" alt="Júlio Cardoso dos Santos" boxSize="100px" borderRadius="full" marginBottom={{base:"32px",lg:0}} />
                        <VStack padding="0 32px" alignItems="flex-start" justifyContent="space-between" fontSize="1rem">
                            <Text>
                                Meu nome é Júlio Cardoso dos Santos. Minha jornada no mundo da programação começou em 2015 quando 
                                escrevi um código pela primeira vez, um System.out.println(&#39;Olá mundo!&#39;) com Java e a partir desse
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
                </HStack>
            </HStack>
            <Image src="/images/lampada2.svg" alt="Criatividade é a minha marca!" height="10vh" />
        </VStack>
    )
}