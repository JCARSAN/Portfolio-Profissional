import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

export function Header(){
    return(
        <HStack as="section" width="100%" maxWidth={1440} justifyContent="space-between" padding="70px 0">
            <Heading lineHeight={1.6}>
                Júlio C. Santos <br />
                Desenvolvedor Front-End.
            </Heading>
            <Flex position="relative">
                <Box position="absolute" left="calc(50% - 100px)" top="calc(50% - 35px)" className="computer-text typing-animation"><Text fontFamily="IBM Plex Mono">Bem-vindo ao meu site.</Text></Box>
                <Image src="/images/notebook_img.png" alt="Um desenho de um notebook" width="100%" maxWidth={353}/>
            </Flex>
        </HStack>
    )
}