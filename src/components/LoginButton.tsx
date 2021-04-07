import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return isAuthenticated ? (
        <></>
    ) : (
        <>
            <button type="button" onClick={() => loginWithRedirect()}>
                login
            </button>
        </>
    );
};

export default LoginButton;
