import * as React from 'react';

type BoardProps = {
    width: number;
    height: number;
};

const Board: React.FC<BoardProps> = (props) => {
    const rowGenerator = () => {
        const elements = [];
        for (let i = 0; i < props.width; i += 1) {
            if (i % 5 === 0) {
                elements.push(<td className="column5" key={i.toString()} />);
            } else {
                elements.push(<td key={i.toString()} />);
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
