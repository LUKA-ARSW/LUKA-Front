/* eslint-disable no-extra-semi */
import { useEffect, useState } from 'react';
import useJwt from '@hooks/useJwt';
import useLocalStorage from '@hooks/useLocalStorage';

const secretKey = import.meta.env.VITE_SECRET_KEY;

function useAuth() {

    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ token ] = useLocalStorage('token', null);
    const { decryptAuthToken } = useJwt(secretKey);

    useEffect(() => {
        const tokenDecrypted = decryptAuthToken(token);
        setIsAuthenticated(tokenDecrypted != null);
    }, [token, decryptAuthToken]);


    return isAuthenticated;

};


export default useAuth;