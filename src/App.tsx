import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader/Preloader';
import './App.css';
import Home from './pages/Landing/Landing';
import Index from './pages/Index/Index';

const App: React.FC = () => {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3500);
    }, []);

    return (
        <>
            {isLoading && <Preloader />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/index" element={<Index />} />
            </Routes>
        </>
    );
};

export default App;
