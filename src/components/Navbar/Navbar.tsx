import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="">
                <ul className="w-screen h-auto flex flex-row gap-x-[10%] px-5 py-4">
                    <li className="shrink-0">
                        <Link
                            to="/"
                            className="font-montrealBold text-white uppercase text-left text-base"
                        >
                            Henry Ho
                        </Link>
                    </li>

                    <div
                        className="w-full h-full flex flex-wrap shrink justify-end gap-x-1
                         text-accent uppercase text-xs"
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
