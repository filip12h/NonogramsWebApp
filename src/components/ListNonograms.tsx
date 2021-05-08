import React, { useState } from 'react';
import firebase from '../util/firebase';

type ListNonogramsProps = {
    nonogramList: any[];
    showBoard: (id: string) => void;
};

const ListNonograms: React.FC<ListNonogramsProps> = ({ showBoard, nonogramList }) => {
    const [minSize, setMinSize] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [myList, setList] = useState(nonogramList);

    // const sortList = () => {
    //    nonogramList.sort((a, b) => (a.width * a.height > b.width * b.height ? 1 : -1));
    // };

    /* eslint-disable */
    return (
        <>
            <label htmlFor="rangeSlider">Minimum size: {minSize}</label>
            <br />
            <input
                type="range"
                min={0}
                max={150}
                multiple
                value={minSize}
                onChange={(e) => setMinSize(parseInt(e.target.value))}
            ></input>
            <div className="sortContainer">
                <div>Sort by</div>
                <div className="sorter">
                    <span>
                        <a>date created</a>
                    </span>
                    <span>
                        <a>size</a>
                    </span>
                </div>
                <div className="sorter">
                    <span>
                        <a>ascendent</a>
                    </span>
                    <span>
                        <a>descendent</a>
                    </span>
                </div>
                <label htmlFor="single">Singlecolor</label>
                <input id="single" type="checkbox" />
                <label htmlFor="multi">Multicolor</label>
                <input id="multi" type="checkbox" />
            </div>
            <br />
            <div className="nonogramList">
                {nonogramList.map((row) => {
                    let nick =
                        firebase
                            .database()
                            .ref(`User/${row.author}`)
                            .once('value', (snapshot) => {
                                return snapshot.val().nickname;
                            })
                            .toString() || '?';
                    return (
                        // IDcko neskor zmazem
                        // eslint-disable-next-line react/jsx-key
                        // TODO tu su nejake problemy s databazou
                        row.enable &&
                        row.height * row.width > minSize * 10 && (
                            <div>
                                <a
                                    role="link"
                                    tabIndex={0}
                                    onClick={() => showBoard(row.id)}
                                    onKeyDown={() => showBoard(row.id)}
                                >
                                    Author: {row.a}
                                    <br /> {row.width}x{row.height}
                                    <br />
                                    colors: {row.usedColors}
                                </a>
                            </div>
                        )
                    );
                })}
            </div>
        </>
    );
};

export default ListNonograms;
