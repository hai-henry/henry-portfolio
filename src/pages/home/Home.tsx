import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import LocalTime from '../../components/LocalTime/LocalTime';

interface HomeProps {
    isLoading: boolean;
}

const Home: React.FC<HomeProps> = ({ isLoading }: HomeProps) => {
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

                    <span
                        className="
                flex flex-col justify-center items-center gap-y-5 w-full h-full px-5
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

                    <span
                        className="flex flex-col justify-center items-center py-3
                        font-montrealBook text-[10px] uppercase text-secondary"
                    >
                        <p>[ Scroll to Explore ]</p>
                    </span>

                    <img
                        src="/src/assets/images/front_arch.jpg"
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
                        flex flex-col justify-end items-center gap-y-5 w-full h-full px-5
                        font-montrealMedium text-white uppercase"
                    >
                        <Header
                            title="Developer / Designer"
                            titleClassName="text-9xl
                            text-left"
                            description="Portfolio ©"
                            descriptionClassName="text-4xl
                            text-right"
                            year={2024}
                        />
                    </span>

                    <span
                        className="flex flex-col justify-center items-center py-5
                        font-montrealBook text-xs uppercase text-secondary"
                    >
                        <p>[ Scroll to Explore ]</p>
                    </span>

                    <img
                        src="/src/assets/images/front_arch.jpg"
                        alt="Parametric Pavilion"
                        className="absolute object-cover align-bottom bottom-0 left-0 z-[-1] brightness-[.6]
                    w-[4190px] md:w-[5607px] xl:w-[5086px]
                    h-[1396px] md:h-[1869px] xl:h-[1695px]"
                    />
                </div>

                {isLoading ? null : <h1>Introduction</h1>}
            </div>
        </>
    );
};

export default Home;
