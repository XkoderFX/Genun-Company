import { Box, Container, Grid, NoSsr, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ImageCarousel from "../ImageCarousel";

const ResultsSection = () => {
    const [images, setImages] = useState<
        Array<{
            src: string;
        }>
    >(null!);

    useEffect(() => {
        setImages([
            {
                src: "/images/garden1.jpg",
            },

            {
                src: "/images/garden2.jpg",
            },

            {
                src: "/images/garden3.jpg",
            },
        ]);
    }, []);

    return (
        <Container id="results" maxWidth="xl">
            <Grid container>
                <Grid item xs={12} lg={4}>
                    <Typography variant="h5" component="h3">
                        העבודות שלנו
                    </Typography>
                    <Typography variant="body1">
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית
                        להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך.
                        קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף
                        קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום,
                        לפריקך תצטריק לרטי. הועניב היושבב שערש שמחויט - שלושע
                        ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ
                        אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא
                        התידם הכייר וק. קולורס מונפרד אדנדום סילקוף, מרגשי
                        ומרגשח. עמחליף לורם איפסום דולור סיט אמט, קונסקטורר
                        אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס
                        וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל
                        אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס
                        בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי.
                        קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי
                        נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן נולום ארווס
                        סאפיאן - פוסיליס קוויס, אקווזמן קוואזי במר מודוף. אודיפו
                        בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף הועניב
                        היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית
                        נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו
                        נמרגי שהכים תוק, הדש שנרא התידם הכייר וק. הועניב היושבב
                        שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש
                        ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי
                        שהכים תוק, הדש שנרא התידם הכייר וק. קוואזי במר מודוף.
                        אודיפו בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק - וענוף
                        לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו
                        צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. גולר מונפרר
                        סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, קולורס מונפרד
                        אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח
                        איבן איף, ברומץ כלרשט מיחוצים. קלאצי
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={8}>
                    <Box display="flex" justifyContent="flex-end">
                        <ImageCarousel images={images} />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ResultsSection;
