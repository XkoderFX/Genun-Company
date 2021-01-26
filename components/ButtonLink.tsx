import React from "react";
import Link from "next/link";
import { Button } from "@material-ui/core";

interface NextButtonLink {
    href: string;
}

const NextButtonLink: React.FC<NextButtonLink> = ({ href, children }) => {
    return (
        <Link href={href} passHref>
            <Button color="inherit" component="a">
                {children}
            </Button>
        </Link>
    );
};

export default NextButtonLink;
