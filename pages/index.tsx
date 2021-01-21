import { Box, Grid, Menu, Toolbar } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import MainMenu from "../components/layout/MainMenu";
import ResultsSection from "../components/layout/ResultsSection";

const IndexPage = () => (
    <>
        <MainMenu items={["בית", "תוצאות", "הזמנה"]} brand="גינון"></MainMenu>

        <Box my={3}>
            <main>
                <ResultsSection></ResultsSection>
            </main>
        </Box>
    </>
);

export default IndexPage;
