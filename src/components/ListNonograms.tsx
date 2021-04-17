import React from 'react';

type ListNonogramsProps = {
    nonogramList: any[];
    showBoard: (id: number) => void;
};

const ListNonograms: React.FC<ListNonogramsProps> = ({ showBoard, nonogramList }) => {
    /* eslint-disable */
    return (
        <ul>
            {nonogramList.map((row) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <li>
                        <a
                            role="link"
                            tabIndex={0}
                            onClick={() => showBoard(row.nonogram_id)}
                            onKeyDown={() => showBoard(row.nonogram_id)}
                        >
                            Id: {row.nonogram_id} | Author: {row.author_id} | {row.width}x
                            {row.height}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
};

export default ListNonograms;
