/*
LettersFadeIn is a component that fades in letters using given text.
Change text in .split class to change text that fades in.
 */

import React, { useEffect } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const LettersFadeIn: React.FC = () => {
    useEffect(() => {
        // Split class .split into words and characters
        const typeSplit = new SplitType('.split', {
            types: 'words,chars',
            tagName: 'span', // Wrap each char and word in span
        });

        document
            .querySelectorAll('[data-letters-fade-in]') // Select all elements with data-letters-fade-in attribute
            .forEach((element) => {
                //For each selected element
                const timeline = gsap.timeline(); // Create a gsap timeline
                timeline.from(element.querySelectorAll('.char'), {
                    // Select all elements with class .char
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power1.out',
                    stagger: { amount: 0.8 },
                });
            });
    }, []);

    return (
        <div className="info overflow-hidden flex flex-col text-left font-montrealBook text-lg uppercase">
            <p className="split" data-letters-fade-in>
                Henry Ho
            </p>
            <p className="split" data-letters-fade-in>
                Software + Architecture Portfolio
            </p>
        </div>
    );
};

export default LettersFadeIn;
