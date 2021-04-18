import React, { useEffect, useState } from 'react';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './components/Footer';
import Board from './components/Board';
import Top from './components/Top';
import Profile from './components/Profile';
import AboutNonograms from './components/AboutNonograms';
import BoardCreator from './components/BoardCreator';
import ListNonograms from './components/ListNonograms';
import firebase from './util/firebase';

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

    const [nonogramList, setNonogramList] = useState<any[]>([]);

    useEffect(() => {
        const nonogramRef = firebase.database().ref('Nonogram');
        nonogramRef.on('value', (snapshot) => {
            const nonograms = snapshot.val();
            const newNonogramList: any[] = [];
            /* eslint-disable */
            for (const id in nonograms) {
                newNonogramList.push({ id, ...nonograms[id] });
            }
            /* eslint-enable */
            setNonogramList(newNonogramList);
        });
    }, []);

    const [nonogramWidth, changeWidth] = useState(5);
    const [nonogramHeight, changeHeight] = useState(5);

    const outerLeftNumbersGenerator = (progress: number[][], wdth: number, hght: number) => {
        const outerLeftNumbers: number[][][] = [];
        for (let i = 0; i < hght; i += 1) {
            outerLeftNumbers.push([]);
            let inSolution = 0;
            let seenColor = 0;
            for (let j = 0; j < wdth; j += 1) {
                if (progress[i][j] > 0) {
                    if (progress[i][j] === seenColor) {
                        inSolution += 1;
                    } else {
                        if (inSolution > 0) {
                            outerLeftNumbers[i].push([inSolution, seenColor]);
                        }
                        inSolution = 1;
                        seenColor = progress[i][j];
                    }
                } else {
                    if (inSolution > 0) {
                        outerLeftNumbers[i].push([inSolution, seenColor]);
                        inSolution = 0;
                    }
                    seenColor = 0;
                }
            }
            if (inSolution > 0) {
                outerLeftNumbers[i].push([inSolution, seenColor]);
            }
        }
        return outerLeftNumbers;
    };

    const outerUpperNumbersGenerator = (progress: number[][], wdth: number, hght: number) => {
        const outerUpperNumbers: number[][][] = [];
        for (let j = 0; j < wdth; j += 1) {
            let seenColor = 0;
            let inSolution = 0;
            outerUpperNumbers.push([]);
            for (let i = hght - 1; i >= 0; i -= 1) {
                if (progress[i][j] > 0) {
                    if (progress[i][j] === seenColor) {
                        inSolution += 1;
                    } else {
                        if (inSolution > 0) {
                            outerUpperNumbers[j].push([inSolution, seenColor]);
                        }
                        inSolution = 1;
                        seenColor = progress[i][j];
                    }
                } else {
                    if (inSolution > 0) {
                        outerUpperNumbers[j].push([inSolution, seenColor]);
                        inSolution = 0;
                    }
                    seenColor = 0;
                }
            }
            if (inSolution > 0) {
                outerUpperNumbers[j].push([inSolution, seenColor]);
            }
        }
        return outerUpperNumbers;
    };

    const stringToSolution = (progress: string, width: number, height: number) => {
        const solution: number[][] = [];
        for (let i = 0; i < height; i += 1) {
            solution.push([]);
            for (let j = 0; j < width; j += 1) {
                solution[i].push(parseInt(progress[i * width + j], 10));
            }
        }
        return solution;
    };

    const [activeSolution, changeBoard] = useState([
        [3, 0, 0, 0, 1],
        [3, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 2],
        [1, 0, 0, 0, 2],
    ]);

    const [activeOuterUpperNumbers, changeUpper] = useState([
        [
            [3, 1],
            [2, 3],
        ],
        [[1, 1]],
        [[1, 1]],
        [[1, 1]],
        [
            [2, 2],
            [3, 1],
        ],
    ]);

    const [activeOuterLeftNumbers, changeLeft] = useState([
        [
            [1, 3],
            [1, 1],
        ],
        [
            [1, 3],
            [1, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [1, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [1, 1],
            [1, 2],
        ],
        [
            [1, 1],
            [1, 2],
        ],
    ]);

    const [correctCounter, change] = useState(12);

    const checkCorrectness = (id: number, previousValue: number, clicked: number) => {
        // we need to prevent cases when we cross out empty space correctly. That times the value is not changed
        if (previousValue !== clicked)
            if (activeSolution[Math.floor(id / nonogramWidth)][id % nonogramWidth] === clicked) {
                // we increase/decrease the number of correct cells whether the cell is in solution or not
                // eslint-disable-next-line no-alert
                if (correctCounter + 1 === nonogramWidth * nonogramHeight)
                    alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
                change(correctCounter + 1);
            } else if (
                activeSolution[Math.floor(id / nonogramWidth)][id % nonogramWidth] === previousValue
            ) {
                // this is case when we changed correct value of tile to incorrect
                // eslint-disable-next-line no-alert
                if (correctCounter - 1 === nonogramWidth * nonogramHeight)
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

    const { user, isAuthenticated } = useAuth0();

    const uploadNonogram = (w: number, h: number, s: string) => {
        const nonogramRef = firebase.database().ref('Nonogram');
        const nonogram = {
            width: w,
            height: h,
            solution: s,
        };
        nonogramRef.push(nonogram);
        setNonogramList([...nonogramList, { width: w, height: h, solution: s }]);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const showBoard = (id: string) => {
        // const index = nonogramList.map((row) => row[0]).indexOf(id);
        console.log(id);
        const nonogram = nonogramList.find((x) => x.id === id); // TODO: toto musim zmenit lebo id nezodpoveda riadku
        console.log(nonogram);
        const nonogramMatrix = stringToSolution(nonogram.solution, nonogram.width, nonogram.height);
        changeWidth(nonogram.width);
        changeHeight(nonogram.height);
        changeBoard(nonogramMatrix);
        changeUpper(outerUpperNumbersGenerator(nonogramMatrix, nonogram.width, nonogram.height));
        changeLeft(outerLeftNumbersGenerator(nonogramMatrix, nonogram.width, nonogram.height));
        change(
            nonogramMatrix.reduce((a, b) => a + b.reduce((c, d) => (d === 0 ? c + 1 : c), 0), 0),
        );
        changeActiveMenu(0);
    };

    return (
        <>
            <Top changeSite={clickMenu} active={activeMenu} />
            <div id="activeAnnouncement">Active: {isAuthenticated ? user.id : 'anonym'}</div>
            {activeMenu === 0 && (
                <>
                    <Board
                        width={activeSolution[0].length}
                        height={activeSolution.length}
                        leftNum={activeOuterLeftNumbers}
                        upNum={activeOuterUpperNumbers}
                        solution={activeSolution}
                        progress={[]}
                        checkCorrect={checkCorrectness}
                        makeCreationProgress={() => null}
                    />
                </>
            )}
            {activeMenu === 1 && (
                <>
                    <AboutNonograms />
                </>
            )}
            {activeMenu === 2 && <BoardCreator uploadNonogram={uploadNonogram} />}
            {activeMenu === 3 && (
                <>
                    <ListNonograms showBoard={showBoard} nonogramList={nonogramList} />
                </>
            )}
            {activeMenu === 4 && <Profile />}
            <Footer />
        </>
    );
};

export default App;
