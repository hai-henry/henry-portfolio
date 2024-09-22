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
                            to="/henry-portfolio/"
                            className="font-montrealBold text-accent uppercase text-left
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
                        {/* <li>
                            <Link to="/henry-portfolio/">Index,</Link>
                        </li>
                        <li>
                            <Link to="/henry-portfolio/">Work,</Link>
                        </li>
                        <li>
                            <Link to="/henry-portfolio/">Concepts,</Link>
                        </li>
                        <li>
                            <Link to="/henry-portfolio/">About,</Link>
                        </li>
                        <li className="text-white font-montrealMedium">
                            <a href="mailto:henryho.hai@gmail.com">Contact</a>
                        </li> */}
                    </div>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
