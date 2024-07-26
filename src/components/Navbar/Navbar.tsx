import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="xl:w-full">
                <ul
                    className="
                w-screen md:w-auto
                h-[51px] flex flex-row items-center
                gap-x-[12%] 
                px-5 md:px-0
                py-4"
                >
                    <li className="shrink-0">
                        <Link
                            to="/"
                            className="font-montrealBold text-white uppercase text-left
                            text-base md:text-md xl:text-2xl"
                        >
                            Henry Ho
                        </Link>
                    </li>

                    <div
                        className="w-full md:w-auto
                        h-auto flex flex-wrap items-center
                        shrink md:shrink-0
                        justify-end gap-x-1 text-accent uppercase 
                        text-xs md:text-sm xl:text-xl"
                    >
                        <li>
                            <Link to="/index">Index,</Link>
                        </li>
                        <li>
                            <Link to="/index">Work,</Link>
                        </li>
                        <li>
                            <Link to="/index">Concepts,</Link>
                        </li>
                        <li>
                            <Link to="/index">About,</Link>
                        </li>
                        <li>
                            <Link
                                to="/index"
                                className="text-white font-montrealMedium"
                            >
                                Contact
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
