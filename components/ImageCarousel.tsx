import React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

interface ImageCarouselProps {
    images: Array<{
        src: string;
        width: string;
        height: string;
    }>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    return (
        <>
            <Carousel>
                {images?.map((image) => (
                    <Image
                        src={image.src}
                        width={image.width}
                        height={image.height}
                    ></Image>
                ))}
            </Carousel>
        </>
    );
};

export default ImageCarousel;
