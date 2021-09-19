import Head from "next/head";
import { ThemeProvider } from "@context/Theme";
import "tailwindcss/tailwind.css";
import "@styles/styles.css";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="description" content="Search Github Users" />
                <title>Github Profiles</title>
            </Head>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
