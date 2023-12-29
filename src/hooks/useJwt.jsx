/* eslint-disable no-extra-semi */
import { useState } from "react";

import jwt from 'jsonwebtoken';

function useJwt(secretKey) {

    const [key, setKey] = useState(secretKey);

    function decryptToken(token) {
        return jwt.verify(token, key);
    }

    return {
        decryptToken,
        setKey
    };

};


export default useJwt;