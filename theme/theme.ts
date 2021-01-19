import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { heIL } from "@material-ui/core/locale";

const theme = createMuiTheme(
    {
        typography: {
            fontFamily: "'Rubik', sans-serif",
            button: {
                fontSize: "20px",
            },
        },
        palette: {
            primary: {
                main: green[500],
            },
            secondary: {
                main: green["A400"],
            },
            text: {
                primary: "#FFFFFF",
            },
        },
    },
    heIL
);

export default theme;
