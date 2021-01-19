import { Menu, Toolbar } from "@material-ui/core";
import React from "react";
import MainMenu from "../components/layout/MainMenu";

const IndexPage = () => (
        <MainMenu items={["בית", "תוצאות", "הזמנה"]} brand="גינון"></MainMenu>
);

export default IndexPage;
