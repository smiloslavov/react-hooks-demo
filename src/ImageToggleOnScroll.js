import React, {useState, useEffect, useRef} from "react";

const ImageToggleOnScroll = ( {primaryImg, secondaryImg} ) => {
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);
    const [inView, setInView] = useState(false);

    const ImageIsInView = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            return (rect.top >= 0 && rect.bottom <= window.innerHeight);
        }

        return false;
    }

    const scrollHandler = () => {
        setInView( () => { return ImageIsInView(); } );
    }

    useEffect( () => {
        window.addEventListener("scroll", scrollHandler);
        setInView(ImageIsInView());
        setIsLoading(false);
        return ( () => { window.removeEventListener("scroll", scrollHandler); } );
    });

    return isLoading ? null : (
        <img 
            src={inView ? secondaryImg : primaryImg }
            alt=""
            ref={imageRef}
        />
    );
};

export default ImageToggleOnScroll;