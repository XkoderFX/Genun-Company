import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";

interface ImageCarouselProps {
    images: Array<{
        src: string;
    }>;
}

const useStyles = makeStyles((theme) => ({
    carousel: {
        direction: "ltr",

        [theme.breakpoints.up("sm")]: {
            minWidth: "900px",
            minHeight: "800px",
        },

        [theme.breakpoints.down("sm")]: {
            minWidth: "100%",
            minHeight: "100%",
        },
    },
})); // * fix to the reverse controlling

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const classes = useStyles();

    return (
        <Carousel navButtonsAlwaysVisible className={classes.carousel}>
            {images?.map((image, i) => (
                <Image
                    key={Date.now() + i}
                    src={image.src}
                    width={800}
                    height={800}
                    layout="responsive"
                ></Image>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
