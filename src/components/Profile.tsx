import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Profile: React.FC = () => {
    const { user, isAuthenticated } = useAuth0();
    return isAuthenticated ? (
        <>
            <img src={user.picture} alt={user.name} />
            <p>{user.name}</p>
            <LogoutButton />
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
