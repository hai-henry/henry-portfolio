import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import LocalTime from '../../components/LocalTime/LocalTime';
// TODO: Change the order based on screen size, have localtime next to navbar for desktop
const Home = () => {
    return (
        <>
            <div
                className="
                flex md:hidden 
                flex-col "
            >
                <Navbar />

                <span
                    className="
                flex flex-col justify-center items-center gap-y-5 w-full h-[778px] px-5
                font-montrealMedium text-white uppercase"
                >
                    <Header
                        title="Developer / Designer"
                        titleClassName="text-5xl text-left"
                        description="Portfolio ©"
                        descriptionClassName="text-sm text-right"
                        year={2024}
                    />
                </span>

                {/* Change "city" to change "Based in {city}" change localTimeZone to preferred time zone
                    Refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for list of timezones */}
                <LocalTime
                    city="Oklahoma City"
                    localTimeZone="America/Chicago"
                />

                <img
                    src="/src/assets/images/front_arch.jpg"
                    alt="Parametric Pavilion"
                    className="absolute object-cover w-[4156px] h-[1385px] align-bottom bottom-0 left-0 z-[-1] brightness-[.6]"
                />
            </div>

            {/* Tablet Layout */}
            <div
                className="
                hidden md:flex 
                flex-col"
            >
                <div className="flex flex-row w-full justify-between px-10">
                    <Navbar />
                    <LocalTime
                        city="Oklahoma City"
                        localTimeZone="America/Chicago"
                    />
                </div>

                <span
                    className="
                flex flex-col justify-center items-center gap-y-5 w-full h-[778px] px-5
                font-montrealMedium text-white uppercase"
                >
                    <Header
                        title="Developer / Designer"
                        titleClassName="text-5xl text-left"
                        description="Portfolio ©"
                        descriptionClassName="text-sm text-right"
                        year={2024}
                    />
                </span>

                <img
                    src="/src/assets/images/front_arch.jpg"
                    alt="Parametric Pavilion"
                    className="absolute object-cover w-[4156px] h-[1385px] align-bottom bottom-0 left-0 z-[-1] brightness-[.6]"
                />
            </div>
        </>
    );
};

export default Home;
