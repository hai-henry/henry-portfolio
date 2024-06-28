import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import LocalTime from '../../components/LocalTime/LocalTime';

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
        </>
    );
};

export default Home;
