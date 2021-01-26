import { Box, Grid, Menu, Toolbar } from "@material-ui/core";
import React from "react";
import About from "../components/layout/About";
import MainMenu from "../components/layout/MainMenu";
import ResultsSection from "../components/layout/ResultsSection";

const IndexPage = () => (
    <>
        <main>
            <About />
            <Box mt={3}>
                <ResultsSection />
            </Box>
        </main>
    </>
);

export default IndexPage;
