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
                src: "/garden1.jpg",
                width: "1000px",
                height: "1000px",
            },

            {
                src: "/garden2.jpg",
                width: "1000px",
                height: "1000px",
            },

            {
                src: "/garden3.jpg",
                width: "1000px",
                height: "1000px",
            },
        ]);
    }, []);

    return (
        <div>
            <ImageCarousel images={images} />
        </div>
    );
};

export default ResultsSection;
