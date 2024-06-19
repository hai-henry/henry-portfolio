import React from 'react';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar flex flex-row">
                <h1 className="navbar__logo font-montrealBold text-left text-xl text-white uppercase">
                    Henry Ho
                </h1>

                <a href="">Index</a>
                <a href="">Work</a>
                <a href="">Concepts</a>
                <a href="">About</a>
                <a href="">Contact</a>

                <p>Based in Oklahoma City</p>

                <p>2024 12:11 PM</p>
            </nav>
        </>
    );
};

export default Navbar;
