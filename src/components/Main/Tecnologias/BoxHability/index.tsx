import { Box, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

type BoxHabilityProps = {
    srcIcon: string;
    technology: string;
}

export function BoxHability({ srcIcon, technology }: BoxHabilityProps){
    return(
        <Box height={{base:'100px'}} width={{base:'100px'}} display="flex" flexDirection="column">
            <Image src={srcIcon} width={{base:50}} margin={{base:'auto'}}/>
            <Text fontSize={{base:'1rem'}}>{technology}</Text>
        </Box>
    )
}