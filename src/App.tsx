import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Board from './components/Board';
import Top from './components/Top';
import Profile from './components/Profile';
import AboutNonograms from './components/AboutNonograms';
import BoardCreator from './components/BoardCreator';

const App: React.FC = () => {
    /*
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

    // we define numbers bottom-up
    const outerUpperNumbers = [
        [[2, 1]],
        [[4, 1]],
        [
            [1, 1],
            [5, 1],
        ],
        [
            [4, 1],
            [3, 1],
        ],
        [
            [2, 1],
            [2, 1],
        ],
        [
            [2, 1],
            [1, 1],
        ],
        [
            [2, 1],
            [2, 1],
        ],
        [
            [2, 1],
            [2, 1],
        ],
        [
            [1, 1],
            [1, 1],
            [1, 1],
        ],
        [
            [2, 1],
            [1, 1],
            [1, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [5, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [3, 1],
            [1, 1],
        ],
        [
            [3, 1],
            [4, 1],
            [1, 1],
        ],
        [
            [4, 1],
            [1, 1],
        ],
        [
            [2, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [1, 1],
            [1, 1],
        ],
        [
            [2, 1],
            [3, 1],
            [2, 1],
            [4, 1],
        ],
        [
            [8, 1],
            [2, 1],
            [7, 1],
        ],
        [
            [2, 1],
            [1, 1],
            [7, 1],
            [1, 1],
        ],
        [
            [2, 1],
            [1, 1],
            [5, 1],
            [1, 1],
        ],
        [
            [3, 1],
            [4, 1],
            [2, 1],
        ],
        [
            [6, 1],
            [3, 1],
        ],
        [[9, 1]],
        [
            [3, 1],
            [1, 1],
        ],
        [[3, 1]],
    ];

    // we define numbers left to right
    const outerLeftNumbers = [
        [[3, 1]],
        [
            [2, 1],
            [1, 1],
        ],
        [
            [3, 1],
            [2, 1],
        ],
        [
            [3, 1],
            [1, 1],
        ],
        [
            [4, 1],
            [2, 1],
        ],
        [
            [3, 1],
            [1, 1],
        ],
        [
            [4, 1],
            [1, 1],
        ],
        [
            [8, 1],
            [5, 1],
        ],
        [
            [4, 1],
            [10, 1],
        ],
        [
            [2, 1],
            [2, 1],
            [3, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [4, 1],
        ],
        [
            [2, 1],
            [1, 1],
            [4, 1],
        ],
        [
            [1, 1],
            [2, 1],
            [1, 1],
            [1, 1],
            [4, 1],
        ],
        [
            [2, 1],
            [1, 1],
            [1, 1],
            [1, 1],
            [1, 1],
        ],
        [
            [3, 1],
            [1, 1],
            [1, 1],
            [2, 1],
            [2, 1],
        ],
        [
            [4, 1],
            [4, 1],
            [4, 1],
        ],
        [
            [2, 1],
            [2, 1],
            [4, 1],
            [1, 1],
            [3, 1],
        ],
        [
            [6, 1],
            [4, 1],
            [2, 1],
        ],
        [
            [5, 1],
            [7, 1],
        ],
        [
            [4, 1],
            [2, 1],
        ],
    ];
*/
    const solution = [
        [1, 0, 0, 2, 2],
        [1, 1, 0, 0, 2],
        [0, 1, 1, 3, 3],
        [3, 0, 1, 1, 3],
        [2, 3, 1, 3, 2],
    ];

    const outerUpperNumbers = [
        [
            [1, 2],
            [1, 3],
            [2, 1],
        ],
        [
            [1, 3],
            [2, 1],
        ],
        [[3, 1]],
        [
            [1, 3],
            [1, 1],
            [1, 3],
            [1, 2],
        ],
        [
            [1, 2],
            [2, 3],
            [2, 2],
        ],
    ];

    const outerLeftNumbers = [
        [
            [1, 1],
            [2, 2],
        ],
        [
            [2, 1],
            [1, 2],
        ],
        [
            [2, 1],
            [2, 3],
        ],
        [
            [1, 3],
            [2, 1],
            [1, 3],
        ],
        [
            [1, 2],
            [1, 3],
            [1, 1],
            [1, 3],
            [1, 2],
        ],
    ];

    const width = solution[0].length;
    const height = solution.length;

    // felt cute, might delete later
    const solvingProgress = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    // in the beginning all empty cells are considered as correct, so we just count white cells
    const numOfCorrectTiles = solution.reduce(
        (a, b) => a + b.reduce((c, d) => (d === 0 ? c + 1 : c), 0),
        0,
    );

    const [correctCounter, change] = useState(numOfCorrectTiles);

    const checkCorrectness = (id: number, previousValue: number, clicked: number) => {
        // we need to prevent cases when we cross out empty space correctly. That times the value is not changed
        if (previousValue !== clicked)
            if (solution[Math.floor(id / width)][id % width] === clicked) {
                // we increase/decrease the number of correct cells whether the cell is in solution or not
                // eslint-disable-next-line no-alert
                if (correctCounter + 1 === width * height)
                    alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
                change(correctCounter + 1);
            } else if (solution[Math.floor(id / width)][id % width] === previousValue) {
                // this is case when we changed correct value of tile to incorrect
                // eslint-disable-next-line no-alert
                if (correctCounter - 1 === width * height)
                    alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
                change(correctCounter - 1);
            }
        // for some reason next line alerted too late
        // if (correct === width * height) alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
    };

    // const [correct, change] = useState(numOfCorrectTiles);
    //             <div>{correctCounter}</div>
    const [activeMenu, changeActiveMenu] = useState(0);

    const clickMenu = (i: number) => {
        changeActiveMenu(i);
    };

    return (
        <>
            <Top changeSite={clickMenu} active={activeMenu} />
            {activeMenu === 0 && (
                <Board
                    width={solution[0].length}
                    height={solution.length}
                    leftNum={outerLeftNumbers}
                    upNum={outerUpperNumbers}
                    solution={solution}
                    progress={solvingProgress}
                    checkCorrect={checkCorrectness}
                    makeCreationProgress={() => null}
                />
            )}
            {activeMenu === 1 && <AboutNonograms />}
            {activeMenu === 2 && <BoardCreator />}
            {activeMenu === 4 && <Profile />}
            <Footer />
        </>
    );
};

export default App;
