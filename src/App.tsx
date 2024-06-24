import React from 'react';
import Preloader from './components/Preloader/Preloader';
import './App.css';
import Home from './pages/home/Home';

const App: React.FC = () => {
    return (
        <>
            <Preloader />
            <Home />
        </>
    );
};

export default App;
