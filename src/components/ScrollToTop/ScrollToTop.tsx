import React, { useState } from 'react';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop; // Position of the scroll

        if (scrolled > 300) {
            setVisible(true); // Show the button when the scroll is greater than 300px
        } else if (scrolled <= 300) {
            setVisible(false); // Hide the button when the scroll is less than or equal to 300px
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Scroll to top of the page
            behavior: 'smooth', // Can change this for different scrolling behavior
        });
    };

    window.addEventListener('scroll', toggleVisible); // Add event listener to the window

    return (
        <span>
            <button
                onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }}
                className="uppercase text-secondary"
            >
                Back to top
            </button>
        </span>
    );
};

export default ScrollButton;
