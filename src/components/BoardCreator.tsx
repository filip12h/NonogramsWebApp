import React, { useState } from 'react';
import Board from './Board';

type BoardCreatorProps = {
    uploadNonogram: (width: number, height: number, solution: string) => void;
};

const BoardCreator: React.FC<BoardCreatorProps> = ({ uploadNonogram }) => {
    const [tableWidth, changeWidth] = useState(0);
    const [tableHeight, changeHeight] = useState(0);
    const [isGenerated, generate] = useState(false);

    // value in inputs, but applied values are tableWidth and tableHeight
    const [widthInput, changeWidthInput] = useState(10);
    const [heightInput, changeHeightInput] = useState(10);

    const [isComputed, computeOuterNumbers] = useState(false);

    const [isResized, resizeTable] = useState(false);

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
        clickComputeHandler();
        resizeTable(true);
        generate(false);
    };

    const changeHeightValue = (val: string) => {
        // eslint-disable-next-line radix
        changeHeightInput(Math.min(Math.abs(parseInt(val)), 100) || 0);
        clickComputeHandler();
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
            if (inSolution > 0) {
                outerLeftNumbers[i].push([inSolution, seenColor]);
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
        const progressInit: number[][] = [[]];
        for (let i = 0; i < heightInput; i += 1) {
            progressInit.push([]);
            for (let j = 0; j < widthInput; j += 1) {
                progressInit[i].push(
                    progress.length > i && progress[0].length > j ? progress[i][j] : 0,
                );
            }
        }
        resizeTable(false);
        makeProgress(progressInit);
        generate(true);
    };

    const upload = (w: number, h: number, s: string) => {
        uploadNonogram(w, h, s);
        changeWidth(0);
        changeHeight(0);
        generate(false);
        computeOuterNumbers(false);
        resizeTable(false);
        makeProgress(emptyProgress);
    };

    const makeTable = () => {
        return (
            <div className="createContainer">
                <div className="inputContainer">
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
                    <br />
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
                </div>
                {(!isGenerated || isResized) && (
                    <input
                        className="genCompButton"
                        type="submit"
                        name="generateTable"
                        value="Generate Table"
                        onClick={() => generateTable()}
                    />
                )}
                {isGenerated && !isResized && (
                    <input
                        className="genCompButton"
                        type="submit"
                        name="computeNumbers"
                        value="Compute Numbers"
                        onClick={clickComputeHandler}
                    />
                )}

                {(isGenerated || isResized) && (
                    <Board
                        width={tableWidth}
                        height={tableHeight}
                        leftNum={isComputed ? outerLeftNumbersGenerator() : []}
                        upNum={isComputed ? outerUpperNumbersGenerator() : []}
                        solution={[[]]}
                        checkCorrect={() => null}
                        makeCreationProgress={clickOnCell}
                        currentProgress={progress}
                        makeProgress={makeProgress}
                    />
                )}
                {isComputed && (
                    <input
                        className="defaultButton"
                        type="submit"
                        name="generateTable"
                        value="Upload Nonogram"
                        onClick={() => upload(tableWidth, tableHeight, progress.flat().join(''))}
                    />
                )}
            </div>
        );
    };

    return makeTable();
};

export default BoardCreator;
