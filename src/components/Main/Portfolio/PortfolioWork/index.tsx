import { Heading, VStack, Image, Text, Link, HStack } from "@chakra-ui/react";

interface PortfolioWorkProps {
    title: string;
    src: string;
    description: string;
    linkRepository: string;
}

export function PortfolioWork( {title,src,description,linkRepository} : PortfolioWorkProps){
    return(
        <VStack alignItems="flex-start" backgroundColor="#FFF" color="#191919" padding="25px" spacing={5} minHeight={{base:'725px'}}>
            <Heading as="h3" fontSize="1.5rem">Projeto: {title}</Heading>
            <Image src={src} height="225px" minHeight="225px" width="100%" marginBottom="10px"/>
            <VStack height="300px" justifyContent="space-between" alignItems="flex-start">
                <Heading as="h4" fontSize="1.25rem">Descrição:</Heading>
                <Text>
                    {description}
                </Text>
                <HStack width="100%" justifyContent="center">
                <Link
                    href={linkRepository}
                    isExternal
                    display="flex"
                    backgroundColor="#F0CA65"
                    color="#000"
                    width="100%"
                    maxWidth="300px"
                    padding="15px"
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={40}
                    fontSize="1.1rem"
                >
                    Repositório no Github
                </Link>
                </HStack>
            </VStack>
        </VStack>
    )
}