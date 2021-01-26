import { ThemeProvider } from "@material-ui/core";
import type { AppProps } from "next/app";
import React from "react";
import theme from "../theme/theme";
import "../styles/html.scss";
import MainMenu from "../components/layout/MainMenu";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <MainMenu
                items={["בית", "תוצאות", "הזמנה"]}
                brand="גינון"
            ></MainMenu>

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
