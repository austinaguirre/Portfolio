import React, { useEffect, useRef } from 'react';

const VantaBackground = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        if (window.VANTA) {
            const vantaEffect = window.VANTA.WAVES({
                el: vantaRef.current,
                THREE: window.THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x0,
                shininess: 4.0,//3
                waveHeight: 8.5,//6.5
                waveSpeed: 0.75,//.7
                zoom: 0.8//.95
            });

            return () => {
                if (vantaEffect) vantaEffect.destroy();
            }
        }
    }, []);

    return <div ref={vantaRef} style={{ position: 'fixed', width: '100vw', height: '100vh', top: 0, left: 0, zIndex: -1 }} />;
};

export default VantaBackground;
