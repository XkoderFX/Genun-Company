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
        <>
            <Typography variant="h5" component="h3">
                העבודות שלנו
            </Typography>
            <NoSsr>
                <Box display="flex" justifyContent="center">
                    <ImageCarousel images={images} />
                </Box>
            </NoSsr>
        </>
    );
};

export default ResultsSection;
