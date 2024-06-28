import React from 'react';

interface LocalTimeProps {
    city: string;
}

const LocalTime: React.FC<LocalTimeProps> = ({ city }) => {
    return (
        <>
            <div
                className="flex flex-row justify-between px-5 
                font-montrealBook text-accent text-[.625em] uppercase"
            >
                <p>Based in {city}</p>
                <p>Time</p>
            </div>
        </>
    );
};

export default LocalTime;
