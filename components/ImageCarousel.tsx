import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import { makeStyles } from "@material-ui/core";

interface ImageCarouselProps {
    images: Array<{
        src: string;
        width: string;
        height: string;
    }>;
}

const useStyles = makeStyles({
    carousel: {
        direction: "ltr",
    },
}); // * fix to the reverse controlling

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const classes = useStyles();

    return (
        <Carousel className={classes.carousel}>
            {images?.map((image) => (
                <Image
                    src={image.src}
                    width={image.width}
                    height={image.height}
                ></Image>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
