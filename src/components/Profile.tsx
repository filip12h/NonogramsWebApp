import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile: React.FC = () => {
    const { user, isAuthenticated } = useAuth0();
    return isAuthenticated ? (
        <>
            <img src={user.picture} alt={user.name} />
            <p>{user.name}</p>
        </>
    ) : (
        <></>
    );
};

export default Profile;
