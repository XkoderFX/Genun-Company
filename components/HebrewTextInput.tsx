import { TextField, Typography } from "@material-ui/core";
import React from "react";

interface HebrewTextInput {
    label: string;
    MuiProps: { [index: string]: any };
}

const HebrewTextInput: React.FC<HebrewTextInput> = ({ label, MuiProps }) => (
    <>
        <Typography variant="body1">{label}</Typography>
        <TextField color="secondary" {...MuiProps} />
    </>
);

export default HebrewTextInput;
