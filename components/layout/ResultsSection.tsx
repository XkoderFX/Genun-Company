import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ImageCarousel from "../ImageCarousel";

const ResultsSection = () => {
    const [images, setImages] = useState<
        Array<{
            src: string;
            width: string;
            height: string;
        }>
    >(null!);

    useEffect(() => {
        setImages([
            {
                src: "/images/garden1.jpg",
                width: "1000px",
                height: "1000px",
            },

            {
                src: "/images/garden2.jpg",
                width: "1000px",
                height: "1000px",
            },

            {
                src: "/images/garden3.jpg",
                width: "1000px",
                height: "1000px",
            },
        ]);
    }, []);

    return (
        <Box display="flex" justifyContent="center">
            <ImageCarousel images={images} />
        </Box>
    );
};

export default ResultsSection;
