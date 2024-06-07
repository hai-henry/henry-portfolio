import './preloader.css';

const Preloader = () => {
    return (
        <>
            <div className="loader">
                <div className="progress">
                    <div id="bar">
                        <div id="bar__confirm"></div>
                    </div>
                    <div id="percent"></div>
                </div>
            </div>
            <div className="main__page">
                <div className="main__page__content">
                    <h1>Henry Portfolio</h1>
                </div>
            </div>
        </>
    );
};

export default Preloader;
