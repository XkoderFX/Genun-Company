import { Typography } from "@material-ui/core";
import React from "react";
import Image from "next/image";

import styles from "../../styles/About.module.scss";

const About = () => {
    return (
        <div className={styles.box}>
            <div className={styles.textBox}>
                <Image
                    src="/images/tree.png"
                    alt="tree image"
                    height="50px"
                    width="50px"
                />
                {/* <Typography variant="h6">גינון חברה</Typography> */}
                <Typography
                    className={styles.heading}
                    color="primary"
                    variant="h4"
                >
                    המוטו של החברה או משפט מגניב
                </Typography>
            </div>
            <div className={styles.bg}></div>

            <div className={styles.grid}>
                <div  className={styles.gridItem}>
                    <Image
                        height="70px"
                        width="70px"
                        src="/images/agriculture.png"
                        alt="agriculture"
                        className={styles.gridImg}
                    />
                    <Typography align="center">
                        לחדגכ חגדל לחכדג לגדכ הרבה חדגלחכ חדגלכחדשל חלדחשכ חלח
                        לשדחכ ךחכש חשדלג חכד ךש חלח{" "}
                    </Typography>
                </div>
                <div className={styles.gridItem}>
                    <Image
                        height="70px"
                        width="70px"
                        src="/images/growth.png"
                        alt="growth"
                        className={styles.gridImg}
                    />
                    <Typography align="center">
                        לחדגכ חגדל לחכדג לגדכ הרבה חדגלחכ חדגלכחדשל חלדחשכ חלח
                        לשדחכ ךחכש חשדלג חכד ךש חלח{" "}
                    </Typography>
                </div>
                <div className={styles.gridItem}>
                    <Image
                        height="70px"
                        width="70px"
                        src="/images/watering-plants.png"
                        alt="watering-plants"
                        className={styles.gridImg}
                    />
                    <Typography align="center">
                        לחדגכ חגדל לחכדג לגדכ הרבה חדגלחכ חדגלכחדשל חלדחשכ חלח
                        לשדחכ ךחכש חשדלג חכד ךש חלח{" "}
                    </Typography>
                </div>
            </div>

            {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
        </div>
    );
};

export default About;
