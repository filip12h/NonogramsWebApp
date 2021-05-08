import React from 'react';
import firebase from '../util/firebase';

type ListNonogramsProps = {
    nonogramList: any[];
    showBoard: (id: string) => void;
};

const ListNonograms: React.FC<ListNonogramsProps> = ({ showBoard, nonogramList }) => {
    /* eslint-disable */
    return (
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
                    row.enable && (
                        <div>
                            <a
                                role="link"
                                tabIndex={0}
                                onClick={() => showBoard(row.id)}
                                onKeyDown={() => showBoard(row.id)}
                            >
                                Author: {row.a}
                                <br /> {row.width}x{row.height}
                            </a>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default ListNonograms;
