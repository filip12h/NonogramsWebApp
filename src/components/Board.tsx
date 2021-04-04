import React, { useState } from 'react';

type TileProps = {
    id: number;
    col5: boolean;
    checkCorrect: (a: number, b: number) => void;
};

const Tile: React.FC<TileProps> = ({ id, col5, checkCorrect }) => {
    const [clicked, changeClicked] = useState(0);
    const [crossed, changeCross] = useState(false);

    const clickCell = () => {
        changeCross(false);
        changeClicked(1 - clicked);
        checkCorrect(id, clicked);
        /*
        if (clicked === inSolution) {
            change(correct + 1);
        } else {
            change(correct - 1);
        }
        */
    };

    // afraid I do not know how to change that any so far...
    const toCross = (e: any) => {
        e.preventDefault();
        if (!clicked) {
            changeCross(!crossed);
        }
    };

    return (
        <td key={id.toString()}>
            <button
                type="button"
                onClick={clickCell}
                className={
                    (col5 ? 'column5' : '') +
                    (clicked ? ' clicked' : '') +
                    (crossed ? ' crossed' : '')
                }
                onContextMenu={toCross}
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
    upNum: number[][];
    leftNum: number[][];
    checkCorrect: (a: number, b: number) => void;
};
const Board: React.FC<BoardProps> = ({
    width,
    height,
    solution,
    progress,
    upNum,
    leftNum,
    checkCorrect,
}) => {
    // numberOfTiles = props.width * props.height;

    /*   TODO: we need to calculate this automatically   */
    const numOfUpperRows = Math.max(...upNum.map((col) => col.length));
    const numOfLeftColumns = Math.max(...leftNum.map((row) => row.length));

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
                    <td className="leftNumbers nonogramDefinition">
                        {leftNum[i][j - numOfLeftColumns + leftNum[i].length]}
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
                >
                    Nonogram Name
                </td>,
            );

        for (let j = 0; j < width; j += 1) {
            if (upNum[j].length >= numOfUpperRows - i) {
                if (j % 5 === 0) {
                    elements.push(
                        <td className="upperNumbers unColumn5 nonogramDefinition">
                            {upNum[j][numOfUpperRows - 1 - i]}
                        </td>,
                    );
                } else {
                    elements.push(
                        <td className="upperNumbers nonogramDefinition">
                            {upNum[j][numOfUpperRows - 1 - i]}
                        </td>,
                    );
                }
            } else if (j % 5 === 0) {
                elements.push(<td className="upperNumbers unColumn5 nonogramDefinition">.</td>);
            } else {
                elements.push(<td className="upperNumbers nonogramDefinition">.</td>);
            }
        }
        return elements;
    };

    const rowGenerator = (j: number) => {
        const elements = [];

        /*  otherwise there was thicker line on the left end    */
        for (let i = 0; i < width; i += 1) {
            if (i % 5 === 0) {
                elements.push(<Tile id={i + j * width} col5 checkCorrect={checkCorrect} />);
            } else {
                elements.push(<Tile id={i + j * width} col5={false} checkCorrect={checkCorrect} />);
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
        return <table>{tableGenerator()}</table>;
    };

    return makeTable();
};

export default Board;
