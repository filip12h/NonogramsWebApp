import React, { useState } from 'react';
import Board from './Board';

const BoardCreator: React.FC = () => {
    const [tableWidth, changeWidth] = useState(0);
    const [tableHeight, changeHeight] = useState(0);
    const [isGenerated, generate] = useState(false);

    // value in inputs, but applied values are tableWidth and tableHeight
    const [widthInput, changeWidthInput] = useState(10);
    const [heightInput, changeHeightInput] = useState(10);

    const [isComputed, computeOuterNumbers] = useState(false);

    const [generatedTableIsResized, resizeTable] = useState(false);

    const clickComputeHandler = () => {
        computeOuterNumbers(true);
    };

    const emptyProgress: number[][] = [[]];
    const [progress, makeProgress] = useState(emptyProgress);

    const clickOnCell = (id: number, clicked: number) => {
        const newProgress: number[][] = progress;
        newProgress[Math.floor(id / tableWidth)][id % tableWidth] = clicked;
        makeProgress(newProgress);
        computeOuterNumbers(false);
    };

    const changeWidthValue = (val: string) => {
        // eslint-disable-next-line radix
        changeWidthInput(Math.min(Math.abs(parseInt(val)), 100) || 0);
        resizeTable(true);
        generate(false);
    };

    const changeHeightValue = (val: string) => {
        // eslint-disable-next-line radix
        changeHeightInput(Math.min(Math.abs(parseInt(val)), 100) || 0);
        resizeTable(true);
        generate(false);
    };

    const outerLeftNumbersGenerator = () => {
        const outerLeftNumbers: number[][][] = [];
        for (let i = 0; i < tableHeight; i += 1) {
            outerLeftNumbers.push([]);
            let inSolution = 0;
            let seenColor = 0;
            for (let j = 0; j < tableWidth; j += 1) {
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
        }
        return outerLeftNumbers;
    };

    const outerUpperNumbersGenerator = () => {
        const outerUpperNumbers: number[][][] = [];
        for (let j = 0; j < tableWidth; j += 1) {
            let seenColor = 0;
            let inSolution = 0;
            outerUpperNumbers.push([]);
            for (let i = tableHeight - 1; i >= 0; i -= 1) {
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

    const generateTable = () => {
        changeWidth(widthInput);
        changeHeight(heightInput);
        const progressInit: number[][] = progress || [[]];
        for (let i = 0; i < heightInput; i += 1) {
            progressInit.push([]);
            for (let j = 0; j < widthInput; j += 1) {
                progressInit[i].push(0);
            }
        }
        resizeTable(false);
        makeProgress(progressInit);
        generate(true);
    };

    const makeTable = () => {
        return (
            <>
                <label htmlFor="width">
                    width
                    <input
                        className="boxes"
                        type="text"
                        id="width"
                        value={widthInput}
                        onChange={(e) => changeWidthValue(e.target.value)}
                    />
                </label>

                <label htmlFor="height">
                    height
                    <input
                        className="boxes"
                        type="text"
                        id="height"
                        value={heightInput}
                        onChange={(e) => changeHeightValue(e.target.value)}
                    />
                </label>

                {(!isGenerated || generatedTableIsResized) && (
                    <input
                        className="center"
                        type="submit"
                        name="generateTable"
                        value="Generate Table"
                        onClick={() => generateTable()}
                    />
                )}
                {isGenerated && !generatedTableIsResized && (
                    <input
                        className="center"
                        type="submit"
                        name="computeNumbers"
                        value="Compute Numbers"
                        onClick={clickComputeHandler}
                    />
                )}

                {(isGenerated || generatedTableIsResized) && (
                    <Board
                        width={tableWidth}
                        height={tableHeight}
                        leftNum={isComputed ? outerLeftNumbersGenerator() : []}
                        upNum={isComputed ? outerUpperNumbersGenerator() : []}
                        solution={[[]]}
                        progress={progress}
                        checkCorrect={() => null}
                        makeCreationProgress={clickOnCell}
                    />
                )}
            </>
        );
    };

    return makeTable();
};

export default BoardCreator;
