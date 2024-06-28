import React from 'react';

interface LocalTimeProps {
    city: string;
    localTimeZone: string;
}

const LocalTime: React.FC<LocalTimeProps> = ({ city, localTimeZone }) => {
    const time = new Date()
        .toLocaleTimeString('en-US', {
            timeZone: localTimeZone, // Go to Navbar.tsx to change time zone
            year: 'numeric', // Display Year
            hour: '2-digit', // Display Hour
            minute: '2-digit', // Display Minute
            second: '2-digit', // Display Second
            hour12: true, // 12 Hour Format
        })
        .replace(',', ''); // Remove comma from time

    // TODO: Update clock every minute or second

    return (
        <>
            <div
                className="flex flex-row justify-between px-5 
                font-montrealBook text-accent text-[.625em] uppercase"
            >
                <p>Based in {city}</p>
                <p>{time}</p>
            </div>
        </>
    );
};

export default LocalTime;
