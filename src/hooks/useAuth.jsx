/* eslint-disable no-extra-semi */
import { useCallback, useEffect, useState } from 'react';
import useJwt from '@hooks/useJwt';
import useLocalStorage from '@hooks/useLocalStorage';

const secretKey = import.meta.env.VITE_SECRET_KEY;

function useAuth() {

    const { readValue: readAuthToken } = useLocalStorage('token', "");
    const { decryptToken: decryptAuthToken } = useJwt(secretKey);
    const checkAuthentication = useCallback(() => {
        try {
            return decryptAuthToken(readAuthToken()) != null;
        } catch (error) {
            return false;   
        }
    }, [readAuthToken, decryptAuthToken]);

    const [ isAuthenticated, setIsAuthenticated ] = useState(checkAuthentication);
    

    useEffect(() => {
        setIsAuthenticated(checkAuthentication);
    }, [checkAuthentication]);

    return { 
        isAuthenticated 
    };

};


export default useAuth;