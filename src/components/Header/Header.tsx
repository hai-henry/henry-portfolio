import React from 'react';

interface HeaderProps {
    title: string;
    description: string;
    year: number;
}

const Header: React.FC<HeaderProps> = ({ title, description, year }) => {
    return (
        <>
            <div
                className="w-screen h-auto flex flex-col gap-y-5 justify-center px-5 py-10
                font-montrealMedium text-white uppercase"
            >
                <h1 className="text-5xl text-left">{title}</h1>
                <p className="text-sm text-right">
                    {description}
                    {year}
                </p>
            </div>
        </>
    );
};

export default Header;
