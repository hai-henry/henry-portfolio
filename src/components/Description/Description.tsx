import React from 'react';

const Description: React.FC = () => {
    return (
        <>
            <div
                className="w-screen h-screen flex flex-col px-5 md:px-14 
                    py-[80px] justify-center items-center"
            >
                <div
                    className="w-full flex flex-col md:flex-row
                    justify-center items-center 
                    md:gap-x-10 lg:gap-x-24
                    "
                >
                    <div
                        className="w-full md:w-auto 
                        flex flex-col justify-start items-center text-secondary 
                        order-1 md:order-2"
                    >
                        <h1
                            className="h-full w-full font-montrealMedium 
                            text-[40px] md:text-5xl lg:text-6xl xl:text-8xl
                            text-right
                            leading-10 "
                        >
                            Precision <br></br> meets artistry.
                        </h1>
                        <p
                            className="md:w-[370px] lg:w-[445px] xl:w-[570px]
                            font-montrealBook 
                            text-xl lg:text-2xl xl:text-3xl
                            text-center align-middle py-[100px] "
                        >
                            Developer with an architectural background blending
                            creativity and precision, passionate about crafting
                            digital experiences that express emotion and
                            inspire.
                        </p>
                    </div>

                    <img
                        className="w-auto lg:w-1/3
                        h-auto
                        object-scaled-down object-right-top overflow-hidden order-2 md:order-1"
                        src="/henry-portfolio/src/assets/images/bwheader-profile.jpg"
                        alt="Black and white profile picture"
                    />
                </div>
            </div>
        </>
    );
};

export default Description;
