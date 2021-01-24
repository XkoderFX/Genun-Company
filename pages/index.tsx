import { Box, Grid, Menu, NoSsr, Toolbar } from "@material-ui/core";
import React from "react";
import About from "../components/layout/About";
import MainMenu from "../components/layout/MainMenu";
import ResultsSection from "../components/layout/ResultsSection";

const IndexPage = () => (
    <>
        <MainMenu items={["בית", "תוצאות", "הזמנה"]} brand="גינון"></MainMenu>
        <main>
            <About />
            <Box style={{ marginTop: "20px" }}>
                <ResultsSection />
            </Box>
        </main>
    </>
);

export default IndexPage;
