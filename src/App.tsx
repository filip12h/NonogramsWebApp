import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Board from './components/Board';
import Top from './components/Top';

const App: React.FC = () => {
    return (
        <>
            <Top />
            <Board width={30} height={25} />
            <Footer />
        </>
    );
};

export default App;
