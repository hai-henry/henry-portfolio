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
            <LocalTime city="Oklahoma City" />
        </>
    );
};

export default Home;
