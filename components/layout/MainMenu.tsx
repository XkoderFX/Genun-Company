import { AppBar, Box, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import NextButtonLink from "../ButtonLink";
interface MainMenuProps {
    brand: string;
}

const MainMenu: React.FC<MainMenuProps> = ({ brand }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3">{brand}</Typography>
                <NextButtonLink href="/">בית</NextButtonLink>
                <NextButtonLink href="/#results">תוצאות</NextButtonLink>
                <NextButtonLink href="/ordering-form">הזמנה</NextButtonLink>
            </Toolbar>
        </AppBar>
    );
};

export default MainMenu;
