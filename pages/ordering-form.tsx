import { Box, Button, Container, Typography } from "@material-ui/core";
import React from "react";
import validator from "validator";
import styles from "../styles/OrderingForm.module.scss";
import HebrewTextInput from "../components/HebrewTextInput";
import {
    DatePicker,
    KeyboardDatePicker,
    MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import heLocale from "date-fns/locale/he";
import axios from "axios";

interface FormFields {
    name: string;
    email: string;
    location: string;
    date: Date | null;
    description: string;
    phone: string;
}

const OrderingForm = () => {
    const [formFields, setFormFields] = React.useState<Partial<FormFields>>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormFields((previousState) => ({ ...previousState, [name]: value }));
    };

    const handleDateChange = (date: Date | null) => {
        setFormFields((previousState) => ({ ...previousState, date: date }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = axios.post(`/api/orders`, {
            ...formFields,
        });
    };

    return (
        <MuiPickersUtilsProvider locale={heLocale} utils={DateFnsUtils}>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Box className={styles.field}>
                        <HebrewTextInput
                            label="שם מלא"
                            MuiProps={{
                                name: "name",
                                fullWidth: true,
                                value: formFields?.name,
                                onChange: handleChange,
                            }}
                        />
                    </Box>

                    <Box className={styles.field}>
                        <HebrewTextInput
                            label="אמייל"
                            MuiProps={{
                                name: "email",
                                type: "email",
                                fullWidth: true,
                                value: formFields?.email,
                                onChange: handleChange,
                            }}
                        />
                    </Box>

                    <Box className={styles.field}>
                        <HebrewTextInput
                            label="מיקום"
                            MuiProps={{
                                name: "location",
                                fullWidth: true,
                                value: formFields?.location,
                                onChange: handleChange,
                            }}
                        />
                    </Box>

                    <Box className={styles.field}>
                        <Typography variant="body1">תאריך</Typography>

                        <DatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            id="date-picker-inline"
                            fullWidth
                            value={formFields?.date}
                            onChange={handleDateChange}
                        />
                    </Box>

                    <Box className={styles.field}>
                        <HebrewTextInput
                            label="תיאור עבודה"
                            MuiProps={{
                                name: "description",
                                multiline: true,
                                rowsMax: 40,
                                variant: "outlined",
                                fullWidth: true,
                                value: formFields?.description,
                                onChange: handleChange,
                            }}
                        />
                    </Box>

                    <Box className={styles.field}>
                        <HebrewTextInput
                            label="מספר טלפון"
                            MuiProps={{
                                name: "phone",
                                type: "tel",
                                fullWidth: true,
                                value: formFields?.phone,
                                onChange: handleChange,
                            }}
                        />
                    </Box>

                    <Box margin={"16px"}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            color="primary"
                        >
                            שלח
                        </Button>
                    </Box>
                </form>
            </Container>
        </MuiPickersUtilsProvider>
    );
};

export default OrderingForm;
