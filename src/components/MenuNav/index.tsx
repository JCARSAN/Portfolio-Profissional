import { Flex, HStack, Link } from '@chakra-ui/react'

export function MenuNav(){
    return(
        <Flex as="nav" 
            backgroundColor="rgba(255,255,255,0.05)" 
            width="100%" 
            height="50px" 
            alignItems="center" 
            justifyContent="center" 
            zIndex={3}
            position="sticky"
            top={0}
            fontSize="lg"
        >
            <HStack 
                as="ul" 
                width="100%" 
                maxWidth={1440} 
                height="50px"  
                justifyContent="flex-start" 
                spacing={10}
            >
                <li><Link href='#sobremim'>Sobre</Link></li>
                <li><Link href='#habilidades'>Habilidades</Link></li>
                <li><Link href='#projetos_profissionais'>Portfólio</Link></li>
                <li><Link href='#projetos_react'>Contato</Link></li>
            </HStack>
        </Flex>
    )
}