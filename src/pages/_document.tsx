import Document, { Html, Head, NextScript, Main } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Inter:wght@400;500;700&family=Kanit:wght@400;500;600&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    {/*
                    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
                    <script>
                        AOS.init();
                    </script>
                    */}
                </body>
            </Html>
        )
    }
}