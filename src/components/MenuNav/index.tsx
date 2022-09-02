import { Flex, HStack, Link } from '@chakra-ui/react'

export function MenuNav(){
    return(
        <Flex as="nav" backgroundColor="#473790" width="100%" height="50px" alignItems="center" justifyContent="center">
            <HStack 
                as="ul" 
                width="100%" 
                maxWidth={1280} 
                height="50px" 
                color="#fff" 
                justifyContent="center" 
                spacing={10}
                fontSize="1.15rem"
            >
                <li><Link href='#sobremim'>Sobre Mim</Link></li>
                <li><Link href='#habilidades'>Habilidades</Link></li>
                <li><Link href='#experiencia_profissional'>Experiência Profissional</Link></li>
                <li><Link href='#projetos_profissionais'>Projetos Profissionais</Link></li>
                <li><Link href='#projetos_react'>Projetos React</Link></li>
            </HStack>
        </Flex>
    )
}