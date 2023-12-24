/* eslint-disable no-extra-semi */
import useCryptoJs from "@hooks/useCryptoJs";

function useEncryption(secretKey) {

    const { encrypt:cryptoJsEncrypt, 
            decrypt:cryptoJsDecrypt } = useCryptoJs(secretKey);

    function encrypt(value){
        return cryptoJsEncrypt(value);
    };

    function decrypt(value){
        return cryptoJsDecrypt(value);
    };

    return {
        encrypt,
        decrypt
    };

};


export default useEncryption;