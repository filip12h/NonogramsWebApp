import React from 'react';

type ListNonogramsProps = {
    nonogramList: any[];
    showBoard: (id: string) => void;
};

const ListNonograms: React.FC<ListNonogramsProps> = ({ showBoard, nonogramList }) => {
    /* eslint-disable */
    return (
        <div className="nonogramList">
            {nonogramList.map((row) => {
                return (
                    // IDcko neskor zmazem
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <a
                            role="link"
                            tabIndex={0}
                            onClick={() => showBoard(row.id)}
                            onKeyDown={() => showBoard(row.id)}
                        >
                            Author: {row.author || '?'} | {row.width}x{row.height}
                        </a>
                    </div>
                );
            })}
        </div>
    );
};

export default ListNonograms;
