/* eslint-disable no-extra-semi */
import CryptoJS from "crypto-js";

import { useState } from "react";

function useCryptoJs(secretKey) {

    const [key, setKey] = useState(secretKey);

    function encrypt(value){
        return CryptoJS.AES.encrypt(value, key).toString();
    };

    function decrypt(value){
        return CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
    };

    return {
        encrypt,
        decrypt,
        setKey
    };

}

export default useCryptoJs;