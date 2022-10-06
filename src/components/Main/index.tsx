import { Divider, VStack } from "@chakra-ui/react";
import { Contato } from "./Contato";
import { Experiencia } from "./Experiencia";
import { Tecnologias } from "./Tecnologias";
import { Header } from "./Header";
import { Portfolio } from "./Portfolio";
import { Sobre } from "./Sobre";
import { useState } from "react";

/*
type MainProps = {
    scrollPosition: number;
    deviceHeight: number;
}
*/
export function Main( /*{ scrollPosition,deviceHeight }: MainProps */){
    //const [device,setDevice] = useState('')

    //console.log("Device Height Main Container: ",deviceHeight);
    /*
    if(deviceHeight <= 500){
        setDevice('mobile');
    }
    */
    /*
    function handleMobileHeight(deviceHeight : number){
        if(deviceHeight <= 500){
            return 'mobile';
        }else{
            return 'notebook';
        }
    }
    */
   /*
    function handleAnimationPosition(deviceHeight: number, section: string){
        let positions = {
            'sobre': {'smartphone': 720, 'notebook': 476},
            'experiencia': {'smartphone': 2118, 'notebook': 992},
            'tecnologias': {'smartphone': 2959, 'notebook': 1600},
            'portfolio': {'smartphone': 3940, 'notebook': 2188},
            'contato': {'smartphone': 6460, 'notebook': 2956},
        };
        if(deviceHeight <= 500){
           return positions[section]['smartphone'];         
        }else{
           return positions[section]['notebook']; 
        }
    }
 */
    return(
        <VStack as="main" width="100%" alignItems="center" justifyContent="flex-start">
            <Header />
            <Divider backgroundColor="light.100"/>
            <Sobre /*scrollPosition={scrollPosition} animationPosition={handleAnimationPosition(deviceHeight,'sobre')} */ />
            <Divider backgroundColor="light.100"/> 
            <Experiencia /*scrollPosition={scrollPosition} animationPosition={handleAnimationPosition(deviceHeight,'experiencia')} */ />
            <Divider backgroundColor="light.100"/>
            <Tecnologias /*scrollPosition={scrollPosition} animationPosition={handleAnimationPosition(deviceHeight,'tecnologias')} */ />
            <Divider backgroundColor="light.100"/>
            <Portfolio /*scrollPosition={scrollPosition} animationPosition={handleAnimationPosition(deviceHeight,'portfolio')} *//>
            <Divider backgroundColor="light.100"/> 
            <Contato /* scrollPosition={scrollPosition} animationPosition={handleAnimationPosition(deviceHeight,'contato')} *//>
            <Divider backgroundColor="light.100"/>
        </VStack>
    )
}