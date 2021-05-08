/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import './App.css';
/* import { useAuth0 } from '@auth0/auth0-react'; */
import Footer from './components/Footer';
import Board from './components/Board';
import Top from './components/Top';
import Profile from './components/Profile';
import AboutNonograms from './components/AboutNonograms';
import BoardCreator from './components/BoardCreator';
import ListNonograms from './components/ListNonograms';
import FindUser from './components/FindUser';
import firebase from './util/firebase';

const App: React.FC = (): JSX.Element => {
    const [userList, setUserList] = useState<any[]>([]);
    const [nonogramList, setNonogramList] = useState<any[]>([]);
    const [nonogramWidth, changeWidth] = useState(5);
    const [nonogramHeight, changeHeight] = useState(5);
    const [activeSolution, changeSolution] = useState([
        [3, 0, 0, 0, 1],
        [3, 1, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 1, 2],
        [1, 0, 0, 0, 2],
    ]);
    const [activeOuterUpperNumbers, changeUpper] = useState([
        [
            [3, 1],
            [2, 3],
        ],
        [[1, 1]],
        [[1, 1]],
        [[1, 1]],
        [
            [2, 2],
            [3, 1],
        ],
    ]);
    const [activeOuterLeftNumbers, changeLeft] = useState([
        [
            [1, 3],
            [1, 1],
        ],
        [
            [1, 3],
            [1, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [1, 1],
            [1, 1],
        ],
        [
            [1, 1],
            [1, 1],
            [1, 2],
        ],
        [
            [1, 1],
            [1, 2],
        ],
    ]);
    const [correctCounter, change] = useState(12);
    const [userId, setUserId] = useState('');
    const [userAuthId, setUserAuthId] = useState('');
    const [nickname, changeNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(true);
    const [activeNonogramId, changeActiveNonogramId] = useState('');
    const [currentProgress, makeNewProgress] = useState(() => {
        const array: number[][] = [];
        for (let i = 0; i < activeSolution.length; i += 1) {
            array.push([]);
            for (let j = 0; j < activeSolution[0].length; j += 1) {
                array[i].push(0);
            }
        }
        return array;
    });

    const makeProgress = (progress: number[][]) => {
        makeNewProgress(progress);
        if (userAuthId)
            firebase
                .database()
                .ref('User')
                .child(userId)
                .child('progresses')
                .child(activeNonogramId)
                .once('value', (snapshot) => {
                    snapshot.ref.set(progress.flat().toString().replace(/,/g, ''));
                });
    };

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };

    const setNickname = () => {
        firebase.database().ref('User').child(userId).update({ nickname });
        store.addNotification({
            title: 'Successfully changed',
            message: `${nickname}, really cool!`,
            type: 'success',
            container: 'top-left',
            insert: 'top',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
                duration: 3000,
            },
        });
    };

    const handleLogin = () => {
        clearErrors();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/invalid-email':
                        break;
                    case 'auth/user-disabled':
                        break;
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
        firebase.auth().onAuthStateChanged((usr) => {
            if (usr) {
                const userRef = firebase.database().ref('User');
                userRef
                    .orderByChild('id')
                    .equalTo(usr.uid)
                    .once('value', (snapshot) => {
                        setUserAuthId(usr.uid || '');
                        if (snapshot.exists()) {
                            console.log('welcome back');
                            store.addNotification({
                                title: 'Successfully logged in',
                                message: 'Enjoy!',
                                type: 'success',
                                container: 'top-left',
                                insert: 'top',
                                animationIn: ['animated', 'fadeIn'],
                                animationOut: ['animated', 'fadeOut'],
                                dismiss: {
                                    duration: 2000,
                                },
                            });
                        } else {
                            console.log('welcome aboard');
                            const newUser = {
                                id: usr.uid,
                                nickname: '',
                                mail: usr.email,
                            };
                            const ref = userRef.push(newUser);
                            console.log(`my key:${ref.key}`);
                        }
                        userRef
                            .orderByChild('id')
                            .equalTo(usr.uid)
                            .on('child_added', (snap) => {
                                setUserId(snap.key || '');
                            });
                    });
                clearInputs();
            } else {
                setUserAuthId('');
            }
        });
    };

    useEffect(() => {
        if (userId)
            firebase
                .database()
                .ref('User')
                .child(userId)
                .once('value', (snap) => {
                    changeNickname(snap.val().nickname);
                });
    }, [userId]);

    const handleSignup = () => {
        store.addNotification({
            title: 'Successfully signed up',
            message: 'Welcome aboard!',
            type: 'success',
            container: 'top-left',
            insert: 'top',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
                duration: 2000,
            },
        });
        clearErrors();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        break;
                    case 'auth/invalid-email':
                        setEmailError(err.message);
                        break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
                    default:
                        break;
                }
            });
    };

    const handleLogout = () => {
        store.addNotification({
            title: 'Successfully logged out',
            message: `Good bye, ${nickname}!`,
            type: 'info',
            container: 'top-left',
            insert: 'top',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
                duration: 2000,
            },
        });
        changeNickname('');
        setUserId('');
        setUserAuthId('');
        firebase.auth().signOut();
    };

    useEffect(() => {
        const userRef = firebase.database().ref('User');
        const nonogramRef = firebase.database().ref('Nonogram');
        nonogramRef.on('value', (snapshot) => {
            const nonograms = snapshot.val();
            const newNonogramList: any[] = [];
            userRef.on('value', (snap) => {
                const users = snap.val();
                const newUserList: any[] = [];
                console.log(users);
                newNonogramList.length = 0;
                for (const aut in users) {
                    for (const id in nonograms) {
                        if (nonograms[id].author === aut) {
                            const a = users[aut].nickname;
                            newNonogramList.push({ id, a, ...nonograms[id] });
                        }
                    }
                    newUserList.push({ ...users[aut] });
                }
                setUserList(newUserList);
            });
            /* eslint-disable */

            setNonogramList(newNonogramList);
        });
    }, []);

    const outerLeftNumbersGenerator = (progress: number[][], wdth: number, hght: number) => {
        const outerLeftNumbers: number[][][] = [];
        for (let i = 0; i < hght; i += 1) {
            outerLeftNumbers.push([]);
            let inSolution = 0;
            let seenColor = 0;
            for (let j = 0; j < wdth; j += 1) {
                if (progress[i][j] > 0) {
                    if (progress[i][j] === seenColor) {
                        inSolution += 1;
                    } else {
                        if (inSolution > 0) {
                            outerLeftNumbers[i].push([inSolution, seenColor]);
                        }
                        inSolution = 1;
                        seenColor = progress[i][j];
                    }
                } else {
                    if (inSolution > 0) {
                        outerLeftNumbers[i].push([inSolution, seenColor]);
                        inSolution = 0;
                    }
                    seenColor = 0;
                }
            }
            if (inSolution > 0) {
                outerLeftNumbers[i].push([inSolution, seenColor]);
            }
        }
        return outerLeftNumbers;
    };

    const outerUpperNumbersGenerator = (progress: number[][], wdth: number, hght: number) => {
        const outerUpperNumbers: number[][][] = [];
        for (let j = 0; j < wdth; j += 1) {
            let seenColor = 0;
            let inSolution = 0;
            outerUpperNumbers.push([]);
            for (let i = hght - 1; i >= 0; i -= 1) {
                if (progress[i][j] > 0) {
                    if (progress[i][j] === seenColor) {
                        inSolution += 1;
                    } else {
                        if (inSolution > 0) {
                            outerUpperNumbers[j].push([inSolution, seenColor]);
                        }
                        inSolution = 1;
                        seenColor = progress[i][j];
                    }
                } else {
                    if (inSolution > 0) {
                        outerUpperNumbers[j].push([inSolution, seenColor]);
                        inSolution = 0;
                    }
                    seenColor = 0;
                }
            }
            if (inSolution > 0) {
                outerUpperNumbers[j].push([inSolution, seenColor]);
            }
        }
        return outerUpperNumbers;
    };

    const stringToSolution = (progress: string, width: number, height: number) => {
        const solution: number[][] = [];
        for (let i = 0; i < height; i += 1) {
            solution.push([]);
            for (let j = 0; j < width; j += 1) {
                solution[i].push(parseInt(progress[i * width + j], 10));
            }
        }
        return solution;
    };

    const checkCorrectness = (id: number, previousValue: number, clicked: number) => {
        // we need to prevent cases when we cross out empty space correctly. That times the value is not changed
        if (previousValue !== clicked)
            if (activeSolution[Math.floor(id / nonogramWidth)][id % nonogramWidth] === clicked) {
                // we increase/decrease the number of correct cells whether the cell is in solution or not
                // eslint-disable-next-line no-alert
                if (correctCounter + 1 === nonogramWidth * nonogramHeight)
                    store.addNotification({
                        title: 'CONGRATULATIONS',
                        message: 'Nonogram is done!',
                        type: 'success',
                        container: 'top-left',
                        insert: 'top',
                        animationIn: ['animated', 'fadeIn'],
                        animationOut: ['animated', 'fadeOut'],
                        dismiss: {
                            duration: 2000,
                        },
                    });
                change(correctCounter + 1);
            } else if (
                activeSolution[Math.floor(id / nonogramWidth)][id % nonogramWidth] === previousValue
            ) {
                // this is case when we changed correct value of tile to incorrect
                // eslint-disable-next-line no-alert
                if (correctCounter - 1 === nonogramWidth * nonogramHeight)
                    store.addNotification({
                        title: 'CONGRATULATIONS',
                        message: 'Nonogram is done!',
                        type: 'success',
                        container: 'top-left',
                        insert: 'top',
                        animationIn: ['animated', 'fadeIn'],
                        animationOut: ['animated', 'fadeOut'],
                        dismiss: {
                            duration: 2000,
                        },
                    });
                change(correctCounter - 1);
            }
        // for some reason next line alerted too late
        // if (correct === width * height) alert('CONGRATULATIONS!\nNONOGRAM IS DONE');
    };

    // const [correct, change] = useState(numOfCorrectTiles);
    //             <div>{correctCounter}</div>
    const [activeMenu, changeActiveMenu] = useState(0);

    const clickMenu = (i: number) => {
        changeActiveMenu(i);
        if (i === 2 && !userId) {
            store.addNotification({
                title: "Don't wanna log in?",
                message: "You won't be able to upload the nonogram",
                type: 'warning',
                container: 'top-left',
                insert: 'top',
                animationIn: ['animated', 'fadeIn'],
                animationOut: ['animated', 'fadeOut'],
                dismiss: {
                    duration: 5000,
                },
            });
        }
    };

    const uploadNonogram = (w: number, h: number, s: string) => {
        store.addNotification({
            title: 'Successfully uploaded',
            message: 'Wait until administrator will approve it',
            type: 'success',
            container: 'top-left',
            insert: 'top',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],
            dismiss: {
                duration: 2000,
            },
        });
        const nonogramRef = firebase.database().ref('Nonogram');
        const nonogram = {
            enable: false,
            author: nickname || '?',
            width: w,
            height: h,
            solution: s,
            usedColors: s
                .split('')
                .filter(function (item, pos, self) {
                    return self.indexOf(item) === pos;
                })
                .join(''),
        };
        nonogramRef.push(nonogram);
        setNonogramList([
            ...nonogramList,
            {
                enable: false,
                author: nickname || '?',
                width: w,
                height: h,
                solution: s,
                usedColors: s
                    .split('')
                    .filter(function (item, pos, self) {
                        return self.indexOf(item) === pos;
                    })
                    .join(''),
            },
        ]);
        changeActiveMenu(3);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const showBoard = (id: string) => {
        // const index = nonogramList.map((row) => row[0]).indexOf(id);
        console.log(id);
        const nonogram = nonogramList.find((x) => x.id === id); // TODO: toto musim zmenit lebo id nezodpoveda riadku
        console.log(nonogram);
        const nonogramMatrix = stringToSolution(nonogram.solution, nonogram.width, nonogram.height);
        // const counter = 0;
        if (userId) {
            firebase
                .database()
                .ref(`User/${userId}/progresses/${id}`)
                .once('value', (snapshot) => {
                    if (snapshot.exists()) {
                        let counter = 0;
                        console.log(nonogramMatrix);
                        makeNewProgress(() => {
                            const array: number[][] = [];
                            const sol = nonogramMatrix.flat().toString().replace(/,/g, '');
                            for (let i = 0; i < nonogram.height; i += 1) {
                                array.push([]);
                                for (let j = 0; j < nonogram.width; j += 1) {
                                    const clicked: number = snapshot.val()[i * nonogram.width + j];
                                    array[i].push(clicked);
                                    if (clicked.toString() === sol[i * nonogram.width + j]) {
                                        counter += 1;
                                    }
                                }
                            }
                            change(counter);
                            return array;
                        });
                    } else {
                        console.log('alert2haha');
                        makeNewProgress(() => {
                            const array: number[][] = [];
                            for (let i = 0; i < nonogram.height; i += 1) {
                                array.push([]);
                                for (let j = 0; j < nonogram.width; j += 1) {
                                    array[i].push(0);
                                }
                            }
                            change(
                                nonogramMatrix.reduce(
                                    (a, b) => a + b.reduce((c, d) => (d === 0 ? c + 1 : c), 0),
                                    0,
                                ),
                            );
                            return array;
                        });
                    }
                });
        } else {
            console.log('alert2haha');
            makeNewProgress(() => {
                const array: number[][] = [];
                for (let i = 0; i < nonogram.height; i += 1) {
                    array.push([]);
                    for (let j = 0; j < nonogram.width; j += 1) {
                        array[i].push(0);
                    }
                }
                change(
                    nonogramMatrix.reduce(
                        (a, b) => a + b.reduce((c, d) => (d === 0 ? c + 1 : c), 0),
                        0,
                    ),
                );
                return array;
            });
        }
        changeActiveNonogramId(id);
        changeWidth(nonogram.width);
        changeHeight(nonogram.height);
        changeSolution(nonogramMatrix);
        changeUpper(outerUpperNumbersGenerator(nonogramMatrix, nonogram.width, nonogram.height));
        changeLeft(outerLeftNumbersGenerator(nonogramMatrix, nonogram.width, nonogram.height));
        changeActiveMenu(0);
    };

    return (
        <div className="fadeIn page-container">
            <div className="content-wrap">
                <Top
                    changeSite={clickMenu}
                    active={activeMenu}
                    isLoggedIn={userAuthId.length > 0}
                />
                <div id="activeAnnouncement" className="notClickable">
                    Active: {nickname || 'anonym'}
                </div>

                <ReactNotification />
                {activeMenu === 0 && (
                    <div className="showSite">
                        <Board
                            width={activeSolution[0].length}
                            height={activeSolution.length}
                            leftNum={activeOuterLeftNumbers}
                            upNum={activeOuterUpperNumbers}
                            solution={activeSolution}
                            checkCorrect={checkCorrectness}
                            makeCreationProgress={() => null}
                            currentProgress={currentProgress}
                            makeProgress={makeProgress}
                            boardCreator={false}
                        />
                        <input
                            className="defaultButton"
                            type="submit"
                            name="resetBtn"
                            value="Reset Nonogram"
                            onClick={() => {
                                const progressInit: number[][] = [[]];
                                for (let i = 0; i < activeSolution.length; i += 1) {
                                    progressInit.push([]);
                                    for (let j = 0; j < activeSolution[0].length; j += 1) {
                                        progressInit[i].push(0);
                                    }
                                }
                                makeProgress(progressInit);
                                changeActiveMenu(3);
                            }}
                        />
                    </div>
                )}
                {activeMenu === 1 && (
                    <div className="showSite">
                        <AboutNonograms />
                    </div>
                )}
                {activeMenu === 2 && (
                    <div className="showSite">
                        <BoardCreator
                            uploadNonogram={uploadNonogram}
                            showUploadBtn={userId !== ''}
                        />
                    </div>
                )}
                {activeMenu === 3 && (
                    <div className="showSite">
                        <ListNonograms showBoard={showBoard} nonogramList={nonogramList} />
                    </div>
                )}
                {activeMenu === 4 && (
                    <div className="showSite">
                        <Profile
                            email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleLogin={handleLogin}
                            handleSignup={handleSignup}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                            emailError={emailError}
                            passwordError={passwordError}
                            handleLogout={handleLogout}
                            isLoggedIn={userAuthId.length > 0}
                            nickname={nickname}
                            setNickname={setNickname}
                            changeNickname={changeNickname}
                            nonogramList={nonogramList}
                            showBoard={showBoard}
                        />
                    </div>
                )}
                {activeMenu === 5 && (
                    <div className="showSite">
                        <FindUser
                            userList={userList}
                            nonogramList={nonogramList}
                            showBoard={showBoard}
                        />
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default App;
