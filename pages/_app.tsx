import { ThemeProvider } from "@context/Theme";
import { UserProvider } from "@context/User";
import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <UserProvider>
                <Head>
                    <title>Github Profiles</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" /> 
                </Head>
                <Component {...pageProps} />
            </UserProvider>
        </ThemeProvider>
    );
}

export default MyApp;
