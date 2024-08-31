import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="w-screen h-3/4 flex flex-col gap-y-5 justify-end">
                <div
                    className="w-auto h-auto flex flex-row justify-between 
                    px-5 md:px-28
                    py-8
                    font-montrealMedium 
                    text-xl md:text-2xl lg:text-3xl xl:text-4xl
                    uppercase"
                >
                    <div className="w-auto h-auto flex flex-col items-start ">
                        <button className="uppercase">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:hvnryho@gmail.com"
                            >
                                Email
                            </a>
                        </button>
                        <button className="uppercase">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/hai-henry"
                            >
                                Github
                            </a>
                        </button>
                        <button className="uppercase">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.linkedin.com/in/henryho01/"
                            >
                                Linkedin
                            </a>
                        </button>
                    </div>
                    <div>
                        <button className="uppercase">Back to top</button>
                    </div>
                </div>
                <h1
                    className="text-center 
                text-7xl md:text-8xl lg:text-9xl xl:text-[180px]
                font-montrealBold uppercase"
                >
                    Get in touch
                </h1>
                <p
                    className="text-center 
                text-xl xl:text-2xl
                uppercase px-5 py-5"
                >
                    Designed and Developed by Henry Ho
                </p>
            </footer>
        </>
    );
};

export default Footer;
