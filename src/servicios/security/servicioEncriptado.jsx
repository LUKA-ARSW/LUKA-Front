import CryptoJS from "crypto-js";

const key = "12345678901234567890123456789012LD";

function encrypt(value){
    return CryptoJS.AES.encrypt(value, key).toString();
};

function decrypt(value){
    return CryptoJS.AES.decrypt(value, key).toString(CryptoJS.enc.Utf8);
};

export default {
    encrypt,
    decrypt
};