import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav>
                <ul
                    className="
                w-screen md:w-auto
                h-[51px] flex flex-row gap-x-[10%] items-center
                px-5 md:px-0
                py-4"
                >
                    <li className="shrink-0">
                        <Link
                            to="/"
                            className="font-montrealBold text-white uppercase text-left 
                            text-base md:text-md"
                        >
                            Henry Ho
                        </Link>
                    </li>

                    <div
                        className="w-full md:w-auto
                        h-full flex flex-wrap items-center
                        shrink md:shrink-0
                        justify-end md:justify-start  
                        gap-x-1 text-accent uppercase 
                        text-xs md:text-sm"
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
                            <Link to="/index" className="text-white">
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
