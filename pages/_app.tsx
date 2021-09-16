import { ThemeProvider } from "@context/Theme";
import Head from "next/head";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Head>
                <title>Github Profiles</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
