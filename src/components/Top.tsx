import React from 'react';
/*eslint-disable*/

type TopProps = {
    changeSite: (i: number) => void;
};

const Top: React.FC<TopProps> = ({ changeSite }) => {
    const clickMenu = (i: number) => {
        changeSite(i);
    };

    return (
        <>
            <h1 id="headline">
                <a
                    role="button"
                    tabIndex={0}
                    onClick={() => clickMenu(0)}
                    onKeyDown={() => clickMenu(0)}
                >
                    Nonograms
                </a>
            </h1>
            <ul className="menubar">
                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(1)}
                        onKeyDown={() => clickMenu(1)}
                    >
                        What is a Nonogram?
                    </a>
                </li>
                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(2)}
                        onKeyDown={() => clickMenu(2)}
                    >
                        Search Nonograms
                    </a>
                </li>
                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(3)}
                        onKeyDown={() => clickMenu(3)}
                    >
                        My Profile
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Top;
