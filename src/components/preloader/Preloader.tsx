import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import LettersFadeIn from '../lettersfadein/Lettersfadein';
import './preloader.css';

const Preloader: React.FC = () => {
    const [width, setWidth] = useState<number>(1); // Loading bar & percentage value
    const intervalId = useRef<number | null>(null); // Store setInterval reference
    const load = useRef<gsap.core.Timeline>(); // GSAP timeline reference

    useEffect(() => {
        // Pause animation
        load.current = gsap.timeline({ paused: true });
        // Loading bar animation
        load.current.to('#bar', {
            duration: 0.8,
            opacity: 0, // Animate to 0 opacity
            zIndex: -1,
        });
        // Fade out loader and percentage
        load.current.to('.loader, #percent', {
            opacity: 0,
            duration: 0.8,
            ease: 'power1.out',
        });
    }, []);

    useEffect(() => {
        function frame() {
            setWidth((prev) => {
                if (prev < 100) {
                    const increment = Math.floor(Math.random() * 5) + 1; // Random increment
                    return Math.min(prev + increment, 100); // Return min of prev + increment and 100
                } else {
                    if (intervalId.current) {
                        clearInterval(intervalId.current); // If percent reaches 100%, clear interval
                    }
                    load.current?.play(); // Play GSAP timeline
                    return prev; // Return value of percent and loading bar width
                }
            });
        }

        intervalId.current = window.setInterval(frame, 50); // Set interval to 50ms

        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current); // Clear interval on component unmount before
            }
        };
    }, []);

    // Format number to 3 digits
    const formatNumber = (num: number): string => {
        return String(num).padStart(3, '0');
    };

    return (
        <>
            <div className="loader">
                <div className="progress">
                    {/* Loading bar, comment back in if wanted */}
                    {/* <div id="bar">
                        <div
                            id="bar__confirm"
                            style={{ width: `${width}%` }} // Increase loading bar "width" css style
                        ></div>
                    </div> */}
                    <div id="percent">
                        {formatNumber(width)}
                        <LettersFadeIn />{' '}
                        {/*Refer to lettersfadein component to make changes to component*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;
