import * as React from 'react';

const Board: React.FC = () => {
    const rowGenerator = () => {
        const elements = [];
        const rowlength = 20;
        for (let i = 0; i < rowlength; i += 1) {
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
        const numofrows = 15;
        for (let i = 0; i < numofrows; i += 1) {
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
