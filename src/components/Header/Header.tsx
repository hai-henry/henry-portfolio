import React from 'react';

interface HeaderProps {
    title: string;
    description: string;
    year: number;
    titleClassName?: string;
    descriptionClassName?: string;
}

const Header: React.FC<HeaderProps> = ({
    title,
    description,
    year,
    titleClassName,
    descriptionClassName,
}) => {
    return (
        <>
            <div>
                <h1 className={titleClassName}>{title}</h1>
                <p className={descriptionClassName}>
                    {description}
                    {year}
                </p>
            </div>
        </>
    );
};

export default Header;
