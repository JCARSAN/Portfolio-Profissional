import { Box, Flex, Heading, HStack, VStack, Image, Link, Text } from "@chakra-ui/react";

export function Header(){
    return(
        <VStack as="section" spacing={{base:39, md:39, lg: 25}} alignItems={{base:'center', md:'center', lg:'flex-start'}} justifyContent="center" padding={{lg:"65px 25px"}} minHeight="100vh">
            <HStack width="100%" justifyContent="space-between" flexWrap="wrap">
                <Heading lineHeight={1.6} width={{base:'100%', md:'100%', lg:'50%' }} textAlign={{base:'center',md:'center', lg:'left'}}>
                    Júlio C. Santos <br />
                    Desenvolvedor Web | Mobile.
                </Heading>
                <Flex position="relative" justifyContent="center" width={{base:'100%', md:'100%', lg:'30%'}}>
                    <Box position="absolute" left="calc(50% - 100px)" top="calc(50% - 35px)" className="computer-text typing-animation"><Text fontFamily="IBM Plex Mono">Bem-vindo ao meu site.</Text></Box>
                    <Image src="/images/notebook_img.png" alt="Um desenho de um notebook" width="100%" maxWidth={353}/>
                </Flex>
            </HStack>
            <Link
                href="https://www.linkedin.com/in/julio-cardoso-834000b5/"
                isExternal
                display="flex"
                backgroundColor="#F0CA65"
                color="#000"
                width="200px"
                height="50px"
                alignItems="center"
                justifyContent="center"
                borderRadius={40}
                fontSize="1.1rem"
            >
                Linkedin
            </Link>
        </VStack>
    )
}