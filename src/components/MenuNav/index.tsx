import { Flex, HStack, Menu, MenuButton, Button, MenuList, MenuItem, Link } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';

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
            justifyContent={{base:"flex-start", md:"center"}}
            zIndex={3}
            position="sticky"
            top={0}
            fontSize="lg"
        >
            <Flex display={{base:'flex',md:'none'}}>
                <Menu>
                    <MenuButton as={Button} 
                        background="transparent" 
                        color="#FFF" 
                        _hover={{backGround:'transparent'}} 
                        _active={{backGround:'transparent'}} 
                        outline='none'
                    >
                        <FaBars />
                    </MenuButton>
                    <MenuList backgroundColor={"dark.800"} color={"light.100"} left="10px" top="-5px">
                        <MenuItem as={Link} _focus={{backgroundColor:'#fff', color:'#191919', textDecoration:'none'}} onClick={() => { window.scrollTo(0,726) }}>Sobre</MenuItem>
                        <MenuItem as={Link} _focus={{backgroundColor:'#fff', color:'#191919', textDecoration:'none'}} onClick={() => { window.scrollTo(0,2126) }}>Experiência</MenuItem>
                        <MenuItem as={Link} _focus={{backgroundColor:'#fff', color:'#191919', textDecoration:'none'}} onClick={() => { window.scrollTo(0,3110) }}>Tecnologias</MenuItem>
                        <MenuItem as={Link} _focus={{backgroundColor:'#fff', color:'#191919', textDecoration:'none'}} onClick={() => { window.scrollTo(0,3765) }}>Portfólio</MenuItem>
                        <MenuItem as={Link} _focus={{backgroundColor:'#fff', color:'#191919', textDecoration:'none'}} onClick={() => { window.scrollTo(0,6265) }}>Contato</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <HStack 
                as="ul" 
                width="100%" 
                maxWidth={1440} 
                height="50px"  
                justifyContent="flex-start" 
                spacing={10}
                paddingLeft={{md:'20px'}}
                display={{base:'none',md:'flex'}}
            >
                <li><Link href='#sobre'>Sobre</Link></li>
                <li><Link href='#experiencia'>Experiência</Link></li>
                <li><Link href='#tecnologias'>Tecnologias</Link></li>
                <li><Link href='#portfolio'>Portfólio</Link></li>
                <li><Link href='#contato'>Contato</Link></li>
            </HStack>
        </Flex>
    )
}