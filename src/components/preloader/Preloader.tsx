/* 
Preloader component uses LettersFadeIn component to display the percentage value 
and a short description of the webpage with LettersFadeIn component.
Refer to LettersFadeIn component to make changes to the text that fades in.
*/

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import LettersFadeIn from '../LettersFadeIn/Lettersfadein';

// TODO: Make loading more random or slow the loading slightly at the end around 90-100
interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({
    onComplete,
}: PreloaderProps) => {
    const [width, setWidth] = useState<number>(1); // Loading bar & percentage value
    const intervalId = useRef<number | null>(null); // Store setInterval reference
    const load = useRef<gsap.core.Timeline>(); // GSAP timeline reference
    const [isVisible, setIsVisible] = useState<boolean>(true); // Visibility of Preloader (used to unRender)

    useEffect(() => {
        // Pause animation
        load.current = gsap.timeline({
            paused: true,
        });
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
            ease: 'power1.in',
            onComplete,
            // Unrender component after fading out
            isVisible: () => {
                setTimeout(() => {
                    setIsVisible(false);
                }, 2000);
            },
        });
    }, [onComplete]);

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

    return isVisible ? (
        <div
            className="loader overflow-hidden absolute top-0 left-0 w-screen h-screen bg-primary
            "
        >
            <div className="progress">
                {/* Loading bar, comment back in if wanted */}
                <div
                    id="bar"
                    className="absolute top-0 left-0 h-screen w-screen"
                >
                    <div
                        className="w-0 h-screen bg-secondary" // Change "bg-white" to color of choice, refer to tailwind "bg" docs
                        style={{ width: `${width}%` }} // Increase loading bar "width" css style
                    ></div>
                </div>
                <div
                    id="percent"
                    className="flex flex-col mix-blend-difference"
                >
                    <div
                        className="absolute flex flex-col justify-center items-center w-screen h-screen
                            font-montrealBold text-secondary 
                            text-9xl 
                            md:text-12.5em

                            lg:bottom-44
                            lg:left-56
                            xl:left-72
                            2xl:left-96
                            "
                    >
                        {formatNumber(width)}
                        <LettersFadeIn />
                        {/*Refer to lettersfadein component to make changes to component*/}
                    </div>
                </div>
            </div>
        </div>
    ) : null;
};

export default Preloader;
