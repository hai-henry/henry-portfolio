import React from 'react';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar flex flex-row">
                <p
                    className="navbar__logo font-montrealBold text-white uppercase
                text-xs"
                >
                    Henry Ho
                </p>
                {/* 
                <a href="">Index</a>
                <a href="">Work</a>
                <a href="">Concepts</a>
                <a href="">About</a>
                <a href="">Contact</a>

                <p>Based in Oklahoma City</p>

                <p>2024 12:11 PM</p> */}
            </nav>
        </>
    );
};

export default Navbar;
