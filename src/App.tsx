import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import './App.css';
import Home from './pages/home/Home';
import Index from './pages/Index/Index';

const App: React.FC = () => {
    return (
        <>
            <Preloader />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Index />} />
            </Routes>
        </>
    );
};

export default App;
