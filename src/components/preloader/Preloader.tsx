import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './preloader.css';

const Preloader: React.FC = () => {
    const [width, setWidth] = useState<number>(1);
    const intervalId = useRef<number | null>(null);
    const load = useRef<gsap.core.Timeline>();

    useEffect(() => {
        load.current = gsap.timeline({ paused: true });
        load.current.to('#percent,#bar', {
            duration: 0.2,
            opacity: 0,
            zIndex: -1,
        });
        load.current.to('.progress', {
            duration: 0.8,
            width: '0%',
        });
        load.current.from(
            '.main__page__content',
            {
                duration: 0.8,
                opacity: 0,
                ease: 'power4.out',
            },
            '-=.5'
        );
        load.current.from(
            '.main__page__content h1',
            {
                duration: 0.5,
                y: 50,
                skewY: 10,
                opacity: 0,
            },
            '-=1'
        );
    }, []);

    useEffect(() => {
        function frame() {
            setWidth((prev) => {
                if (prev < 100) {
                    return prev + 1;
                } else {
                    if (intervalId.current) {
                        clearInterval(intervalId.current);
                    }
                    load.current?.play();
                    return prev;
                }
            });
        }

        intervalId.current = window.setInterval(frame, 25);

        return () => {
            if (intervalId.current) {
                clearInterval(intervalId.current);
            }
        };
    }, []);

    return (
        <>
            <div className="loader">
                <div className="progress">
                    <div id="bar">
                        <div
                            id="bar__confirm"
                            style={{ width: `${width}%` }}
                        ></div>
                    </div>
                    <div id="percent">{width}%</div>
                </div>
            </div>
            <div className="main__page">
                <div className="main__page__content">
                    <h1>Henry Portfolio</h1>
                </div>
            </div>
        </>
    );
};

export default Preloader;
