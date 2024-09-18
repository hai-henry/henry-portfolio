import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import LocalTime from '../../components/LocalTime/LocalTime';
import Description from '../../components/Description/Description';
import Footer from '../../components/Footer/Footer';

import frontArch from '../../assets/images/front_arch.jpg';

// TODO: Update font sizes for better aesthetics
// TODO: Fix custom font imports
const Home: React.FC = () => {
    return (
        <>
            <div>
                {/* Mobile Layout */}
                <div
                    className="
                    w-screen h-screen
                    flex md:hidden 
                    flex-col "
                >
                    <Navbar />

                    <span className="pt-2">
                        {/* Change "city" to change "Based in {city}" change localTimeZone to preferred time zone
                    Refer to https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for list of timezones */}
                        <LocalTime
                            city="Oklahoma City"
                            localTimeZone="America/Chicago"
                        />
                    </span>

                    <span
                        className="
                        flex flex-col justify-center items-center w-full h-full px-5
                        font-montrealMedium text-secondary uppercase gap-1 mb-12"
                    >
                        <Header
                            title="Developer / Designer"
                            titleClassName="font-montrealBold text-[2.5rem] text-center leading-[85%]"
                            description="Portfolio ©"
                            descriptionClassName="text-xs text-right"
                            year={2024}
                        />
                    </span>

                    {/* 
                    <span
                        className="w-screen h-auto flex flex-col justify-center items-center py-3
                        font-montrealBook text-[10px] uppercase text-accent"
                    >
                        <p>[ Scroll to Explore ]</p>
                    </span> */}

                    <img
                        src={frontArch}
                        alt="Parametric Pavilion"
                        className="absolute object-cover w-[4190px] h-[1396px] align-bottom bottom-0 left-0 z-[-1] brightness-[.6]"
                    />
                </div>

                {/* Tablet/Desktop Layout */}
                <div
                    className="
                    w-screen h-screen
                    hidden md:flex 
                    flex-col "
                >
                    <div className="flex flex-row w-full justify-between items-center px-10">
                        <Navbar />
                        <LocalTime
                            city="Oklahoma City"
                            localTimeZone="America/Chicago"
                        />
                    </div>

                    <span
                        className="
                        flex flex-row justify-center items-end gap-y-5 w-full h-full px-10
                        font-montrealMedium text-white uppercase"
                    >
                        <Header
                            title="Developer / Designer"
                            titleClassName="w-auto h-auto font-montrealBold 
                            text-7xl lg:text-8xl xl:text-9xl
                            text-left leading-[85%]"
                            description="Portfolio ©"
                            descriptionClassName="w-full h-auto text-2xl xl:text-3xl
                            text-right"
                            year={2024}
                        />
                    </span>

                    <span
                        className="w-full flex flex-col justify-center items-center py-[30px]
                        font-montrealBook text-xs uppercase text-accent"
                    >
                        <p>[ Scroll to Explore ]</p>
                    </span>

                    <img
                        src={frontArch}
                        alt="Parametric Pavilion"
                        className="absolute object-cover align-bottom bottom-0 left-0 z-[-1] brightness-[.6]
                        w-[4190px] md:w-[5607px] xl:w-[5086px]
                        h-[1396px] md:h-[1869px] xl:h-[1695px]"
                    />
                </div>
            </div>
            <Description />
            <Footer />
        </>
    );
};

export default Home;
