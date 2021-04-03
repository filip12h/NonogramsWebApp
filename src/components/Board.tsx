import React, { useState } from 'react';

type TileProps = {
    id: number;
    col5: boolean;
};

const Tile: React.FC<TileProps> = ({ id, col5 }) => {
    const [clicked, changeClicked] = useState(false);

    const clickCell = () => {
        changeClicked(!clicked);
    };

    return (
        <td key={id.toString()}>
            <button
                type="button"
                onClick={clickCell}
                className={(col5 ? 'column5' : '') + (clicked ? ' clicked' : '')}
            >
                {null}
            </button>
        </td>
    );
};

const solution = [
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
];

const solvingProgress = [];

const outerUpperNumbers = [
    [4, 7, 5],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
];

const outerLeftNumbers = [
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7, 1],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
    [5],
    [1, 2],
    [6],
    [4, 7],
    [3],
];

/*   TODO: we need to calculate this automatically   */
const numOfUpperRows = Math.max(...outerUpperNumbers.map((col) => col.length));
const numOfLeftColumns = Math.max(...outerLeftNumbers.map((row) => row.length));

type BoardProps = {
    width: number;
    height: number;
};

const Board: React.FC<BoardProps> = (props) => {
    if (solution.length === 5 && solvingProgress.length === 1) {
        // eslint-disable-next-line
        alert('haha');
    }

    const outerLeftNumbersGenerator = (i: number) => {
        const elements = [];
        for (let j = 0; j < numOfLeftColumns; j += 1) {
            if (outerLeftNumbers[i].length < numOfLeftColumns - j) {
                elements.push(<td className="leftNumbers nonogramDefinition">.</td>);
            } else {
                elements.push(
                    <td className="leftNumbers nonogramDefinition">
                        {outerLeftNumbers[i][j - numOfLeftColumns + outerLeftNumbers[i].length]}
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
                    colSpan={numOfUpperRows}
                    rowSpan={numOfLeftColumns}
                    className="nonogramDefinition"
                />,
            );

        for (let j = 0; j < props.width; j += 1) {
            if (outerUpperNumbers[j].length >= numOfUpperRows - i) {
                if (j % 5 === 0) {
                    elements.push(
                        <td className="upperNumbers column5 nonogramDefinition">
                            {outerUpperNumbers[j][numOfUpperRows - 1 - i]}
                        </td>,
                    );
                } else {
                    elements.push(
                        <td className="upperNumbers nonogramDefinition">
                            {outerUpperNumbers[j][numOfUpperRows - 1 - i]}
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

        /*  otherwise there was thicker line on the left end    */
        for (let i = 0; i < props.width; i += 1) {
            if (i % 5 === 0) {
                elements.push(<Tile id={i + j * props.width} col5 />);
            } else {
                elements.push(<Tile id={i + j * props.width} col5={false} />);
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
        for (let i = 0; i < props.height; i += 1) {
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
