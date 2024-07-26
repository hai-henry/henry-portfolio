import React, { useState, useEffect } from 'react';

interface LocalTimeProps {
    city: string; // City name
    localTimeZone: string; // Time zone
}

const LocalTime: React.FC<LocalTimeProps> = ({ city, localTimeZone }) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            // Update time every second
            const currentTime = new Date()
                .toLocaleTimeString('en-US', {
                    timeZone: localTimeZone, // Go to Navbar.tsx to change time zone
                    year: 'numeric', // Display Year
                    hour: '2-digit', // Display Hour
                    minute: '2-digit', // Display Minute
                    // second: '2-digit', // Display Second
                    hour12: true, // 12 Hour Format
                })
                .replace(',', ''); // Remove comma from time
            setTime(currentTime); // Update time state
        }, 1000);

        return () => {
            clearInterval(interval); // Clear interval when component unmounts
        };
    }, [localTimeZone]);

    return (
        <>
            <div
                className="w-auto h-[12px] flex flex-row 
                justify-between xl:shrink-0
                px-5 md:px-0 items-center
                md:gap-x-4 xl:gap-x-40
                font-montrealBook text-accent  uppercase
                text-[.625em] xl:text-sm"
            >
                <p>Based in {city}</p>
                <p>{time}</p>
            </div>
        </>
    );
};

export default LocalTime;
