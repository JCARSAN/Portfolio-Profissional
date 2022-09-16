import { background, Flex, HStack, Link } from '@chakra-ui/react'

type MenuNavprops = {
    isScrolled: boolean;
}

export function MenuNav( { isScrolled } : MenuNavprops ){
    return(
        <Flex as="nav"
            backgroundColor={isScrolled ? "rgba(25,25,25,1)" : "rgba(255,255,255,0.05)" }
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
                <li><Link href='#sobre'>Sobre</Link></li>
                <li><Link href='#habilidades'>Habilidades</Link></li>
                <li><Link href='#portfolio'>Portfólio</Link></li>
                <li><Link href='#contato'>Contato</Link></li>
            </HStack>
        </Flex>
    )
}