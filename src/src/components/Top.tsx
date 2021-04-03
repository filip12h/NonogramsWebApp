import React from 'react';

const Top: React.FC = () => {
    return (
        <>
            <h1 id="headline">
                <a href="about.html">Nonograms</a>
            </h1>
            <ul className="menubar">
                <li>
                    <a href="about.html">What is a Nonogram?</a>
                </li>
                <li>
                    <a href="collection.html">Search Nonograms</a>
                </li>
                <li>
                    <a href="profile.html">My Profile</a>
                </li>
            </ul>
        </>
    );
};

export default Top;
