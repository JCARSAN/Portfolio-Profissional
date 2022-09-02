import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors:{
        light: {
            "100": 'F5F8FA',
            "500": '#D9D9D9',
            "900": '#FFFFFF'
        },
        highlight: {
            "500": "#FFBA08"
        },
        dark: {
            "300": '#47585B',
            "900": '#000000'
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: 'light.900',
                color: 'dark.900'
            },
            ul: {
                listStyleType: 'none',
                textDecoration: 'none'
            }
        }
    }
})