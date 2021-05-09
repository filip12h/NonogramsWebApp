/* eslint-disable no-prototype-builtins */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';

type FindUserProps = {
    userList: any[];
    nonogramList: any[];
    showBoard: (id: string) => void;
};

const FindUser: React.FC<FindUserProps> = ({ userList, nonogramList, showBoard }) => {
    const [seenUser, setSeenUser] = useState<any>('');
    const [seenUserAuthId, setSeenUserAuthId] = useState<any>('');
    /*
<img src={user.picture} alt={user.name} />
                <input
                    type="text"
                    name="myDescription"
                    id="myDescription"
                    value={inputDescription}
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <p>{user.name}</p>
                
    */
    //    const [inputDescription, setDescription] = useState('');
    if (seenUser) {
        /* const completedNon = firebase
            .database()
            .ref(`User/${seenUser}/completed`)
            .once('value', (snapshot) => {
                return snapshot.numChildren();
            }); */
        return (
            <>
                <h2 className="notClickable">{seenUser}</h2>

                <div className="profile">
                    Completed Nonograms:{' '}
                    {userList.map((row) => {
                        let elem;
                        if (row.id === seenUserAuthId) {
                            let size = 0;
                            for (elem in row.completed) {
                                if (row.completed.hasOwnProperty(elem)) size += 1;
                            }
                            return size;
                        }
                        return '';
                    })}
                    <div className="myNonogramList">
                        {nonogramList.map((row) => {
                            return (
                                // IDcko neskor zmazem
                                /* eslint-disable */

                                row.a == seenUser &&
                                row.enable && (
                                    <div>
                                        <a
                                            role="link"
                                            tabIndex={0}
                                            onClick={() => showBoard(row.id)}
                                            onKeyDown={() => showBoard(row.id)}
                                        >
                                            Author: {row.a || '?'} <br /> {row.width}x{row.height}
                                        </a>
                                    </div>
                                )
                            );
                        })}
                    </div>
                    <button type="button" onClick={() => setSeenUser('')}>
                        Back
                    </button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="nonogramList">
                    {userList.map((row) => {
                        return (
                            // IDcko neskor zmazem
                            /* eslint-disable */

                            <div>
                                <a
                                    role="link"
                                    tabIndex={0}
                                    onClick={() => {
                                        setSeenUser(row.nickname);
                                        setSeenUserAuthId(row.id);
                                    }}
                                    onKeyDown={() => {
                                        setSeenUser(row.nickname);
                                        setSeenUserAuthId(row.id);
                                    }}
                                >
                                    {row.nickname || '?'}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
};

export default FindUser;
