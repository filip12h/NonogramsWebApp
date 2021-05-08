import React, { useState } from 'react';

type FindUserProps = {
    userList: any[];
    nonogramList: any[];
    showBoard: (id: string) => void;
};

const FindUser: React.FC<FindUserProps> = ({ userList, nonogramList, showBoard }) => {
    const [seenUser, setSeenUser] = useState('');
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
        return (
            <>
                <h2 className="notClickable">{seenUser}</h2>
                <div className="profile">
                    <div className="nonogramList">
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
                                    onClick={() => setSeenUser(row.nickname)}
                                    onKeyDown={() => setSeenUser(row.nickname)}
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
