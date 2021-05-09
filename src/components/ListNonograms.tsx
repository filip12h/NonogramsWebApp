import React, { useState } from 'react';
import done from '../pics/done.png';
import half from '../pics/half.png';
import empty from '../pics/empty.png';
import warning from '../pics/warning.gif';

type ListNonogramsProps = {
    admin: boolean;
    usersProgresses: any[];
    nonogramList: any[];
    showBoard: (id: string) => void;
};

const ListNonograms: React.FC<ListNonogramsProps> = ({
    admin,
    showBoard,
    nonogramList,
    usersProgresses,
}) => {
    const [minSize, setMinSize] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [myList, setList] = useState(nonogramList);
    const [activeCriteria, setCriteria] = useState(0);
    const [activeAscend, setAscend] = useState(0);
    const [colorCriteria, setColorCriteria] = useState(3);
    const [filter, setFilter] = useState(7);

    const setNewFilter = (a: number) => {
        setFilter(Math.max(a, 1));
    };

    const setNewCriteria = (crit: number, asc: number) => {
        if (crit === 0 && asc === 0) {
            const newList = myList.sort((x, y) => x.dateCreated.localeCompare(y.dateCreated));
            setList(newList);
        } else if (crit === 0 && asc === 1) {
            const newList = myList.sort((x, y) => y.dateCreated.localeCompare(x.dateCreated));
            setList(newList);
        } else if (crit === 1 && asc === 0) {
            const newList = myList.sort((x, y) => x.width * x.height - y.width * y.height);
            setList(newList);
        } else if (crit === 1 && asc === 1) {
            const newList = myList.sort((x, y) => y.width * y.height - x.width * x.height);
            setList(newList);
        }
        setCriteria(crit);
    };

    const setNewAscend = (a: number) => {
        setNewCriteria(activeCriteria, a);
        setAscend(a);
    };

    // const sortList = () => {
    //    nonogramList.sort((a, b) => (a.width * a.height > b.width * b.height ? 1 : -1));
    // };

    /* eslint-disable */
    return (
        <>
            <aside>
                <div className="range">
                    <label htmlFor="rangeSlider">Minimum size: {minSize}</label>
                    <br />
                    <input
                        id="rangeSlider"
                        type="range"
                        min={0}
                        max={150}
                        multiple
                        value={minSize}
                        onChange={(e) => setMinSize(parseInt(e.target.value))}
                    ></input>
                </div>
                <div className="sortContainer">
                    Sort by
                    <div className="sorter">
                        <span>
                            <a
                                role="link"
                                tabIndex={0}
                                onClick={() => setNewCriteria(0, activeAscend)}
                                onKeyDown={() => setNewCriteria(0, activeAscend)}
                                className={activeCriteria === 0 ? 'active' : ''}
                            >
                                date created
                            </a>
                        </span>
                        <span>
                            <a
                                role="link"
                                tabIndex={0}
                                onClick={() => setNewCriteria(1, activeAscend)}
                                onKeyDown={() => setNewCriteria(1, activeAscend)}
                                className={activeCriteria === 1 ? 'active' : ''}
                            >
                                size
                            </a>
                        </span>
                    </div>
                    <div className="sorter">
                        <span>
                            <a
                                role="link"
                                tabIndex={0}
                                onClick={() => setNewAscend(0)}
                                onKeyDown={() => setNewAscend(0)}
                                className={activeAscend === 0 ? 'active' : ''}
                            >
                                ascendent
                            </a>
                        </span>
                        <span>
                            <a
                                role="link"
                                tabIndex={0}
                                onClick={() => setNewAscend(1)}
                                onKeyDown={() => setNewAscend(1)}
                                className={activeAscend === 1 ? 'active' : ''}
                            >
                                descendent
                            </a>
                        </span>
                    </div>
                </div>
                <div className="filterContainer">
                    <label htmlFor="single">Singlecolor</label>
                    <input
                        id="single"
                        type="checkbox"
                        checked={colorCriteria % 2 === 1}
                        onClick={() => setColorCriteria(3 - (colorCriteria % 2))}
                    />
                    <label htmlFor="multi">Multicolor</label>
                    <input
                        id="multi"
                        type="checkbox"
                        checked={colorCriteria > 1}
                        onClick={() => setColorCriteria(3 - Math.floor(colorCriteria / 2) * 2)}
                    />
                    <br />
                    <img src={empty} width="20px"></img>
                    <label htmlFor="notSolved">Not solved</label>
                    <input
                        id="notSolved"
                        type="checkbox"
                        checked={filter % 2 === 1}
                        onClick={() => setNewFilter(filter + 1 - (filter % 2) * 2)}
                    />{' '}
                    <br />
                    <img src={half} width="20px"></img>
                    <label htmlFor="unfinished">Not finished yet</label>
                    <input
                        id="unfinished"
                        type="checkbox"
                        checked={(filter - (filter % 2)) % 4 === 2}
                        onClick={() => setNewFilter(filter + 2 - ((filter - (filter % 2)) % 4) * 2)}
                    />
                    <br />
                    <img src={done} width="20px"></img>
                    <label htmlFor="finished">Finished</label>
                    <input
                        id="finished"
                        type="checkbox"
                        checked={filter > 3}
                        onClick={() => setNewFilter(filter > 3 ? filter - 4 : filter + 4)}
                    />
                </div>
            </aside>
            <br />
            <div className="nonogramList">
                {nonogramList.map((row) => {
                    return (
                        // IDcko neskor zmazem
                        // eslint-disable-next-line react/jsx-key
                        // TODO tu su nejake problemy s databazou
                        ((typeof usersProgresses[row.id] === 'undefined' && filter % 2 === 1) ||
                            ((filter - (filter % 2)) % 4 === 2 &&
                                usersProgresses[row.id] !== row.solution &&
                                typeof usersProgresses[row.id] !== 'undefined') ||
                            (filter > 3 &&
                                usersProgresses[row.id] === row.solution &&
                                typeof usersProgresses[row.id] !== 'undefined')) &&
                        (row.enable || admin) &&
                        row.height * row.width > minSize * 10 &&
                        ((row.usedColors.length > 2 && colorCriteria > 1) ||
                            (row.usedColors.length === 2 && colorCriteria % 2 === 1)) && (
                            <div>
                                <a
                                    role="link"
                                    tabIndex={0}
                                    onClick={() => showBoard(row.id)}
                                    onKeyDown={() => showBoard(row.id)}
                                >
                                    {!row.enable && (
                                        <img id="flag" src={warning} width="40px"></img>
                                    )}
                                    Author: {row.a}
                                    <br /> {row.width}x{row.height}
                                    <br />
                                    colors:
                                    {row.usedColors}
                                    <br />
                                    {row.dateCreated}
                                    <br />
                                    {typeof usersProgresses[row.id] === 'undefined' ? (
                                        <img src={empty} width="20px"></img>
                                    ) : usersProgresses[row.id] === row.solution ? (
                                        <img src={done} width="20px"></img>
                                    ) : (
                                        <img src={half} width="20px"></img>
                                    )}
                                </a>
                            </div>
                        )
                    );
                })}
            </div>
            <div className="colors">
                *colors' codes:
                <br />
                <span className="tenthwidth">0: not filled</span>
                <span className="tenthwidth color1">1: black</span>
                <span className="tenthwidth color2">2: blue</span>
                <span className="tenthwidth color3">3: red</span>
                <span className="tenthwidth color4">4: green</span>
                <span className="tenthwidth color5">5: yellow</span>
                <span className="tenthwidth color6">6: orange</span>
                <span className="tenthwidth color7">7: purple</span>
                <span className="tenthwidth color8">8: grey</span>
                <span className="tenthwidth color9">9: teal</span>
            </div>
        </>
    );
};

export default ListNonograms;
