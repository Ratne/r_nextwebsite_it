import {useEffect, useState} from 'react';

const useResponsiveSize = () => {
    const isClient = typeof window === 'object';

    const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 0);

    const breakpoints = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
    };
    useEffect(() => {
        if (!isClient) return;
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isClient]);

    const getSize = () => {
        if (!isClient) return;

        if (windowWidth < breakpoints.sm) {
            return 'xs';
        } else if (windowWidth >= breakpoints.sm && windowWidth < breakpoints.md) {
            return 'sm';
        } else if (windowWidth >= breakpoints.md && windowWidth < breakpoints.lg) {
            return 'md';
        } else if (windowWidth >= breakpoints.lg && windowWidth < breakpoints.xl) {
            return 'lg';
        } else {
            return 'xl';
        }
    };

    const isBelowMediaQuery = (breakpoint) => {
        return windowWidth < breakpoints[breakpoint];
    };

    const isAboveMediaQuery = (breakpoint) => {
        return windowWidth >= breakpoints[breakpoint];
    };

    return {
        size: getSize(),
        isBelowMediaQuery,
        isAboveMediaQuery,
    };
};

export default useResponsiveSize;