import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Board from './components/Board';
import Top from './components/Top';

const App: React.FC = () => {
    const solution = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0],

        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1],

        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0],

        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ];
    const width = solution[0].length;
    const height = solution.length;

    // felt cute, might delete later
    const solvingProgress = [[]];

    // we define numbers bottom-up
    const outerUpperNumbers = [
        [2],
        [4],
        [1, 5],
        [4, 3],
        [2, 2],
        [2, 1],
        [2, 2],
        [2, 2],
        [1, 1, 1],
        [2, 1, 1, 1],
        [1, 5, 1],
        [1, 3, 1],
        [3, 4, 1],
        [4, 1],
        [2, 1],
        [1, 1, 1],
        [2, 3, 2, 4],
        [8, 2, 7],
        [2, 1, 7, 1],
        [2, 1, 5, 1],
        [3, 4, 2],
        [6, 3],
        [9],
        [3, 1],
        [3],
    ];

    // we define numbers left to right
    const outerLeftNumbers = [
        [3],
        [2, 1],
        [3, 2],
        [3, 1],
        [4, 2],
        [3, 1],
        [4, 1],
        [8, 5],
        [4, 10],
        [2, 2, 3, 1],
        [1, 4],
        [2, 1, 4],
        [1, 2, 1, 1, 4],
        [2, 1, 1, 1, 1],
        [3, 1, 1, 2, 2],
        [4, 4, 4],
        [2, 2, 4, 1, 3],
        [6, 4, 2],
        [5, 7],
        [4, 2],
    ];

    // in the beginning all empty cells are considered as correct, so we just count white cells
    const numOfCorrectTiles = solution.reduce(
        (a, b) => a + b.reduce((c, d) => (d === 0 ? c + 1 : c), 0),
        0,
    );

    const [correctCounter, change] = useState(numOfCorrectTiles);

    const checkCorrectness = (id: number, clicked: number) => {
        // we increase/decrease the number of correct cells whether the cell is in solution or not
        if (!(solution[Math.floor(id / width)][id % width] - clicked === 0)) {
            if (correctCounter + 1 === width * height) alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
            change(correctCounter + 1);
        } else {
            if (correctCounter - 1 === width * height) alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
            change(correctCounter - 1);
        }
        // for some reason next line alerted too late
        // if (correct === width * height) alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
    };

    // const [correct, change] = useState(numOfCorrectTiles);
    //             <div>{correctCounter}</div>

    return (
        <>
            <Top />
            <Board
                width={solution[0].length}
                height={solution.length}
                leftNum={outerLeftNumbers}
                upNum={outerUpperNumbers}
                solution={solution}
                progress={solvingProgress}
                checkCorrect={checkCorrectness}
            />
            <Footer />
        </>
    );
};

export default App;
