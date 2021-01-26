import { createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { heIL } from "@material-ui/core/locale";

const theme = createMuiTheme(
    {
        direction: "rtl",

        typography: {
            fontFamily: "'Rubik', sans-serif",
            button: {
                fontSize: "20px",
            },
        },
        palette: {
            primary: {
                main: green[500],
                contrastText: "#fff",
            },
            secondary: {
                main: green["A400"],
            },
        },
    },
    heIL
);

export default theme;
