import React from 'react';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="navbar flex flex-row w-screen ">
                <h1
                    className="navbar__logo font-montrealBold text-xl text-white uppercase
                    px-10 py-4"
                >
                    Henry Ho
                </h1>
            </nav>
        </>
    );
};

export default Navbar;
