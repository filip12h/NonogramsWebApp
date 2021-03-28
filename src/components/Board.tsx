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

type BoardProps = {
    width: number;
    height: number;
};

const Board: React.FC<BoardProps> = (props) => {
    const rowGenerator = () => {
        const elements = [];
        for (let i = 0; i < props.width; i += 1) {
            if (i % 5 === 0) {
                elements.push(<Tile id={i} col5 />);
            } else {
                elements.push(<Tile id={i} col5={false} />);
            }
        }
        return elements;
    };

    const tableGenerator = () => {
        const elements = [];
        for (let i = 0; i < props.height; i += 1) {
            if (i % 5 === 0) {
                elements.push(
                    <tr className="row5" key={i.toString()}>
                        {rowGenerator()}
                    </tr>,
                );
            } else {
                elements.push(<tr key={i.toString()}>{rowGenerator()}</tr>);
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
