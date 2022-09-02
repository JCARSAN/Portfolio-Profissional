import { Box, Flex, Heading } from "@chakra-ui/react";

export function Header(){
    return(
        <Flex as='header'
            position="relative"
            backgroundImage='url("/images/workspace5.jpg")'
            width="100%"
            height="80vh"
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundColor="#000"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
        >
            <Box position="absolute" width="100%" height="100%" backgroundColor="rgba(0,0,0,0.8)"></Box>
            <Heading as="h1" position="absolute" color="#FFF">
                Júlio C. Santos <br/>
                Desenvolvedor Front-End
            </Heading>
        </Flex>
    )
    
}