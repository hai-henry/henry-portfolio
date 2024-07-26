import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import './App.css';
import Home from './pages/home/Home';
import Index from './pages/Index/Index';

const App: React.FC = () => {
    const [isPreloaderVisible, setIsPreloaderVisible] = useState<boolean>(true); // Visibility of Preloader (used to unRender)

    const handlePreloaderVisibility = () => {
        setIsPreloaderVisible(false);
    };

    return (
        <>
            <Preloader onComplete={handlePreloaderVisibility} />
            <Routes>
                <Route
                    path="/"
                    element={<Home isLoading={isPreloaderVisible} />}
                />
                <Route path="/index" element={<Index />} />
            </Routes>
        </>
    );
};

export default App;
