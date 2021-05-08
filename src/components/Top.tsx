import React from 'react';

/*eslint-disable*/

type TopProps = {
    active: number;
    changeSite: (i: number) => void;
    isLoggedIn: boolean;
};

const Top: React.FC<TopProps> = ({ changeSite, active, isLoggedIn }) => {
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
                    Nononograms
                </a>
            </h1>
            <ul className="menubar">
                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(1)}
                        onKeyDown={() => clickMenu(1)}
                        className={active === 1 ? 'active' : ''}
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
                        className={active === 2 ? 'active' : ''}
                    >
                        Create a Nonogram
                    </a>
                </li>
                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(3)}
                        onKeyDown={() => clickMenu(3)}
                        className={active === 3 ? 'active' : ''}
                    >
                        Search Nonograms
                    </a>
                </li>

                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(4)}
                        onKeyDown={() => clickMenu(4)}
                        className={active === 4 ? 'active' : ''}
                    >
                        {isLoggedIn ? 'My Profile' : 'Log in'}
                    </a>
                </li>

                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(5)}
                        onKeyDown={() => clickMenu(5)}
                        className={active === 5 ? 'active' : ''}
                    >
                        Find User
                    </a>
                </li>
            </ul>
            <ul className="menubar_mobile">
                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(1)}
                        onKeyDown={() => clickMenu(1)}
                        className={active === 1 ? 'active' : ''}
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(2)}
                        onKeyDown={() => clickMenu(2)}
                        className={active === 2 ? 'active' : ''}
                    >
                        Create
                    </a>
                </li>
                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(3)}
                        onKeyDown={() => clickMenu(3)}
                        className={active === 3 ? 'active' : ''}
                    >
                        Search
                    </a>
                </li>

                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(4)}
                        onKeyDown={() => clickMenu(4)}
                        className={active === 4 ? 'active' : ''}
                    >
                        Profile
                    </a>
                </li>

                <li>
                    <a
                        role="link"
                        tabIndex={0}
                        onClick={() => clickMenu(5)}
                        onKeyDown={() => clickMenu(5)}
                        className={active === 5 ? 'active' : ''}
                    >
                        Find User
                    </a>
                </li>
            </ul>
        </>
    );
};

export default Top;
