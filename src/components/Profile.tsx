import React from 'react';

type ProfileProps = {
    email: string;
    password: string;
    setEmail: (a: string) => void;
    setPassword: (a: string) => void;
    handleLogin: () => void;
    handleSignup: () => void;
    hasAccount: boolean;
    setHasAccount: (a: boolean) => void;
    emailError: string;
    passwordError: string;
    handleLogout: () => void;
    isLoggedIn: boolean;
    nickname: string;
    setNickname: (a: string) => void;
    changeNickname: (a: string) => void;
};

const Profile: React.FC<ProfileProps> = ({
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogout,
    isLoggedIn,
    nickname,
    setNickname,
    changeNickname,
}) => {
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
    return isLoggedIn ? (
        <>
            <h2>My profile</h2>
            <div className="profile">
                <label htmlFor="nickname">
                    Nickname
                    <input
                        id="nickname"
                        type="text"
                        value={nickname}
                        onChange={(e) => changeNickname(e.target.value)}
                    />
                </label>
                <button type="button" onClick={() => setNickname(nickname)}>
                    Save
                </button>
                <button type="button" onClick={() => handleLogout()}>
                    logout
                </button>
            </div>
        </>
    ) : (
        <>
            <h2>Log in?</h2>
            <div className="profile">
                <label htmlFor="username">
                    Email
                    <input
                        id="username"
                        type="text"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <p className="errorMsg">{emailError}</p>
                <label htmlFor="password">
                    Password
                    <input
                        id="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                document.getElementById('login')?.click();
                            }
                        }}
                    />
                </label>
                <p className="errorMsg">{passwordError}</p>

                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button id="login" type="submit" onClick={handleLogin}>
                                Log in
                            </button>
                            <div className="changeOption">
                                <span
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setHasAccount(false)}
                                    onKeyDown={() => setHasAccount(false)}
                                >
                                    Sign up
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <button id="signup" type="submit" onClick={handleSignup}>
                                Sign up
                            </button>
                            <div className="changeOption">
                                <span
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => setHasAccount(true)}
                                    onKeyDown={() => setHasAccount(true)}
                                >
                                    Log in
                                </span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Profile;
