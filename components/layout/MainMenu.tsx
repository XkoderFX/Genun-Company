import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";

interface MainMenuProps {
    brand: string;
    items: string[];
}

const MainMenu: React.FC<MainMenuProps> = ({ brand, items }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3">{brand}</Typography>
                {items.map((item) => (
                    <Link href="#">
                        <Button>{item}</Button>
                    </Link>
                ))}
            </Toolbar>
        </AppBar>
    );
};

export default MainMenu;
