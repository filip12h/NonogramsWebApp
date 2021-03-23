import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Input from './components/Input';
import Board from './components/Board';
import Top from './components/Top';

const App: React.FC = () => {
    return (
        <>
            <Top />
            <Input />
            <Board />
            <Footer />
        </>
    );
};

export default App;
