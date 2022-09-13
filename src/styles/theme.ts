import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        light: {
            "100": '#FFFFFF',
        },
        gold: {
            "100": "#F5DFB6"
        },
        dark: {
            "800": '#191919'
        }
    },
    fonts: {
        body: 'Kanit',
    },
    styles: {
        global: {
            body: {
                bg: 'dark.800',
                color: 'light.100'
            },
            ul: {
                color: 'gold.100',
                listStyleType: 'none',
                textDecoration: 'none'
            }
        }
    }
})