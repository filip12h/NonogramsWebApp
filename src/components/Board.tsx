import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

type TileProps = {
    id: number;
    col5: boolean;
    pickedColor: number;
    checkCorrect: (a: number, prev: number, b: number) => void;
    makeProgress: (a: number, b: number) => void;
};

const Tile: React.FC<TileProps> = ({ id, col5, pickedColor, checkCorrect, makeProgress }) => {
    const [clicked, changeClicked] = useState(0);
    const [crossed, changeCross] = useState(false);

    // afraid I do not know how to change that any so far...
    const toCross = (e: Event) => {
        e.preventDefault();
        if (clicked) {
            checkCorrect(id, clicked, 0);
            makeProgress(id, 0);
        }
        changeClicked(0);
        changeCross(!crossed);
    };

    const clickCell = () => {
        if (pickedColor === 0 && !crossed) {
            changeCross(true);
        } else {
            changeCross(false);
        }
        // we should change const 1 to number of set Color
        const newValue = clicked === pickedColor ? 0 : pickedColor;

        changeClicked(newValue);
        checkCorrect(id, clicked, newValue);
        makeProgress(id, newValue);
        /*
        if (clicked === inSolution) {
            change(correct + 1);
        } else {
            change(correct - 1);
        }
        */
    };

    return (
        <td className={col5 ? 'column5' : ''} key={id.toString()}>
            <button
                type="button"
                onClick={clickCell}
                className={`clicked${clicked}${crossed ? ' crossed' : ''}`}
                onContextMenu={(e: any) => toCross(e)}
            >
                {null}
            </button>
        </td>
    );
};

type BoardProps = {
    width: number;
    height: number;
    solution: number[][];
    progress: number[][];
    upNum: number[][][];
    leftNum: number[][][];
    checkCorrect: (a: number, prev: number, b: number) => void;
    makeCreationProgress: (a: number, b: number) => void;
};
const Board: React.FC<BoardProps> = ({
    width,
    height,
    solution,
    progress,
    upNum,
    leftNum,
    checkCorrect,
    makeCreationProgress,
}) => {
    const [currentProgress, makeProgress] = useState(
        new Array(height).fill(new Array(width).fill(0)),
    );
    const [selectedColor, changeColor] = useState(1);

    const pickColor = (i: number) => {
        changeColor(i);
    };

    /*   TODO nieco strasne tunak...   */

    const clickOnCell = (id: number, clicked: number) => {
        const newProgress: number[][] = currentProgress;
        // newProgress[Math.floor(id / width)][id % width] = clicked;
        makeProgress(newProgress);
        makeCreationProgress(id, clicked);
    };

    // numberOfTiles = props.width * props.height;

    /*   TODO: we need to calculate this to render appropriate number of columns/rows   */
    const numOfUpperRows = Math.max(...upNum.map((col) => col.length));
    const numOfLeftColumns = Math.max(...leftNum.map((row) => row.length));

    // just some stupid test I'll delete later
    if (solution.length === 5 && progress.length === 1) {
        // eslint-disable-next-line
        alert('haha');
    }

    const outerLeftNumbersGenerator = (i: number) => {
        const elements = [];
        for (let j = 0; j < numOfLeftColumns; j += 1) {
            if (leftNum[i].length < numOfLeftColumns - j) {
                elements.push(<td className="leftNumbers nonogramDefinition">.</td>);
            } else {
                elements.push(
                    <td
                        className={`leftNumbers nonogramDefinitionNumber color${
                            leftNum[i][j - numOfLeftColumns + leftNum[i].length][1]
                        }`}
                    >
                        {leftNum[i][j - numOfLeftColumns + leftNum[i].length][0]}
                    </td>,
                );
            }
        }
        return elements;
    };

    const upperRowsGenerator = (i: number) => {
        const elements = [];
        if (i === 0)
            elements.push(
                <td
                    colSpan={numOfLeftColumns}
                    rowSpan={numOfUpperRows}
                    className="nonogramDefinition"
                />,
            );
        for (let j = 0; j < width; j += 1) {
            if (upNum[j].length >= numOfUpperRows - i) {
                if (j % 5 === 0) {
                    elements.push(
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <td
                            className={`upperNumbers column5 nonogramDefinitionNumber color${
                                upNum[j][numOfUpperRows - 1 - i][1]
                            }`}
                            onClick={() => changeColor(upNum[j][numOfUpperRows - 1 - i][1])}
                            onKeyUp={() => changeColor(upNum[j][numOfUpperRows - 1 - i][1])}
                        >
                            {upNum[j][numOfUpperRows - 1 - i][0]}
                        </td>,
                    );
                } else {
                    elements.push(
                        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                        <td
                            className={`upperNumbers nonogramDefinitionNumber color${
                                upNum[j][numOfUpperRows - 1 - i][1]
                            }`}
                            onClick={() => changeColor(upNum[j][numOfUpperRows - 1 - i][1])}
                            onKeyUp={() => changeColor(upNum[j][numOfUpperRows - 1 - i][1])}
                        >
                            {upNum[j][numOfUpperRows - 1 - i][0]}
                        </td>,
                    );
                }
            } else if (j % 5 === 0) {
                elements.push(<td className="upperNumbers column5 nonogramDefinition">.</td>);
            } else {
                elements.push(<td className="upperNumbers nonogramDefinition">.</td>);
            }
        }
        return elements;
    };

    const rowGenerator = (j: number) => {
        const elements = [];

        for (let i = 0; i < width; i += 1) {
            if (i % 5 === 0) {
                elements.push(
                    <Tile
                        id={i + j * width}
                        col5
                        pickedColor={selectedColor}
                        checkCorrect={checkCorrect}
                        makeProgress={clickOnCell}
                    />,
                );
            } else {
                elements.push(
                    <Tile
                        id={i + j * width}
                        col5={false}
                        pickedColor={selectedColor}
                        checkCorrect={checkCorrect}
                        makeProgress={clickOnCell}
                    />,
                );
            }
        }
        return elements;
    };

    const tableGenerator = () => {
        const elements = [];
        /*   we generate upper rows first   */
        for (let i = 0; i < numOfUpperRows; i += 1) {
            elements.push(<tr> {upperRowsGenerator(i)} </tr>);
        }
        /*  we generate whole table */
        for (let i = 0; i < height; i += 1) {
            if (i % 5 === 0) {
                elements.push(
                    <tr className="row5" key={i.toString()}>
                        {outerLeftNumbersGenerator(i)} {rowGenerator(i)}
                    </tr>,
                );
            } else {
                elements.push(
                    <tr key={i.toString()}>
                        {outerLeftNumbersGenerator(i)} {rowGenerator(i)}
                    </tr>,
                );
            }
        }
        return elements;
    };

    const makeTable = () => {
        return (
            <>
                <ColorPicker onChange={pickColor} />
                <table onContextMenu={(e) => e.preventDefault}>{tableGenerator()}</table>
            </>
        );
    };

    return makeTable();
};

export default Board;
