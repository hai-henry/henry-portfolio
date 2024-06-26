import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import LocalTime from '../../components/LocalTime/LocalTime';
// TODO: Change the order based on screen size, have localtime next to navbar for desktop
const Home = () => {
    return (
        <>
            <Navbar />
            <Header
                title="Developer / Designer"
                description="Portfolio ©"
                year={2024}
            />
            {/* Change "city" to change "Based in {city}" change localTimeZone to preferred time zone
                    Refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for list of timezones */}
            <LocalTime city="Oklahoma City" localTimeZone="America/Chicago" />

            <span className="flex flex-col w-auto h-auto justify-center items-center py-10">
                <img
                    src="/src/assets/images/bwheader-profile.jpg"
                    alt="bwheader-profile"
                    className="w-[245px] h-[245px]"
                />
            </span>
        </>
    );
};

export default Home;
