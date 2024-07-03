import { useState, useEffect } from "react";

export type BreakpointsType = typeof breakpoints;

const breakpoints = {
    base: 375,
    sm: 768,
    md: 1024,
    lg: 1440,
} as const;

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { screenSize, breakpoints };
};

export default useScreenSize;
