import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="w-screen h-3/4 flex flex-col gap-y-5 justify-end">
                <div
                    className="w-auto h-auto flex flex-row justify-between px-5 pt-8
                    font-montrealMedium text-xl uppercase"
                >
                    <div className="w-auto h-auto flex flex-col items-start ">
                        <button className="uppercase">Email</button>
                        <button className="uppercase">Github</button>
                        <button className="uppercase">Linkedin</button>
                    </div>
                    <div>
                        <button className="uppercase">Back to top</button>
                    </div>
                </div>
                <h1 className="text-center text-7xl font-montrealBold uppercase">
                    Get in touch
                </h1>
                <p className="text-center text-xl uppercase px-5 pb-5">
                    Designed and Developed by Henry Ho
                </p>
            </footer>
        </>
    );
};

export default Footer;
