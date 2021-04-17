import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Profile: React.FC = () => {
    const { user, isAuthenticated } = useAuth0();
    const [inputDescription, setDescription] = useState('');
    return isAuthenticated ? (
        <>
            <div className="profile">
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
                <LogoutButton />
            </div>
        </>
    ) : (
        <>
            <h2>Wanna log in?</h2>
            <div className="center">
                <LoginButton />
            </div>
        </>
    );
};

export default Profile;
