import { Divider, VStack } from "@chakra-ui/react";
import { Header } from "./Header";

export function Main(){
    return(
        <VStack as="main" width="100%" alignItems="center" justifyContent="flex-start">
            <Header />
            <Divider backgroundColor="light.100"/> 
        </VStack>
    )
}