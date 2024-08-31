import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="w-screen h-3/4 flex flex-col gap-y-5 justify-end">
                <div
                    className="w-auto h-auto flex flex-row justify-between 
                    px-5 lg:px-28
                    py-8
                    font-montrealMedium 
                    text-xl lg:text-3xl
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
                text-7xl lg:text-9xl
                font-montrealBold uppercase"
                >
                    Get in touch
                </h1>
                <p className="text-center text-xl uppercase px-5 py-5">
                    Designed and Developed by Henry Ho
                </p>
            </footer>
        </>
    );
};

export default Footer;
