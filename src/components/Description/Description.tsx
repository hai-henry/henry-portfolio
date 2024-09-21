/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';
import bwheader from '../../assets/images/bwheader-profile.jpg';
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Description: React.FC = () => {
    useEffect(() => {
        new SplitType('[data-animate]', {
            // Target the element with the data-animate attribute
            types: 'lines,words,chars', // Specifies that we want to split the text into lines, words, and characters
            tagName: 'span', // Each part (line, word, char) will be wrapped in a <span> element
        });

        gsap.registerPlugin(ScrollTrigger);

        gsap.from('[data-animate] .line', {
            y: '100%',
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out',
            stagger: 0.1,

            scrollTrigger: {
                trigger: '[data-animate]',
                start: 'top 70%',
                end: 'bottom 50%',
                scrub: true,
            },
        });
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            '[data-animate-image]', // Target element with the data-animate-image attribute
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power1.out',
                scrollTrigger: {
                    trigger: '[data-animate-image]',
                    start: 'top 90%',
                    end: 'bottom 50%',
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <>
            <div
                className="w-screen h-screen flex flex-col px-5 md:px-14 
                    py-[80px] justify-center items-center "
            >
                <div
                    className="w-full flex flex-col md:flex-row
                    justify-center items-center 
                    md:gap-x-10 lg:gap-x-24
                    "
                >
                    <div
                        className="w-full md:w-auto 
                        flex flex-col justify-start items-center text-secondary 
                        order-1 md:order-2"
                    >
                        <h1
                            data-animate="true"
                            className="h-full w-full font-montrealMedium 
                            text-[40px] md:text-5xl lg:text-6xl xl:text-8xl
                            text-right
                            leading-10 "
                        >
                            Precision <br></br> meets artistry.
                        </h1>
                        <p
                            data-animate="true"
                            className="md:w-[370px] lg:w-[445px] xl:w-[570px]
                            font-montrealBook 
                            text-xl lg:text-2xl xl:text-3xl
                            text-center align-middle py-[100px] "
                        >
                            Developer with an architectural background blending
                            creativity and precision, passionate about crafting
                            digital experiences that express emotion and
                            inspire.
                        </p>
                    </div>

                    <img
                        data-animate-image="true"
                        className="w-auto lg:w-1/3
                        h-auto
                        object-scaled-down object-right-top overflow-hidden order-2 md:order-1"
                        src={bwheader}
                        alt="Black and white profile picture"
                    />
                </div>
            </div>
        </>
    );
};

export default Description;
