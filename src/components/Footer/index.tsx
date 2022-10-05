import { HStack, Link, Text } from '@chakra-ui/react';
import { BiCopyright } from 'react-icons/bi';

export function Footer(){
    return(
        <HStack as="footer" width="100%" padding="32px 0px" justifyContent="center">
            <HStack width="100%" maxWidth={1440} padding={{base:"0 25px"}}>
                <BiCopyright />
                <Text>Site projetado e desenvolvido por Júlio C. Santos e hospedado pela <Link href='https://vercel.com/' isExternal textDecoration="underline">Vercel</Link></Text>
            </HStack>
        </HStack>
    )
}