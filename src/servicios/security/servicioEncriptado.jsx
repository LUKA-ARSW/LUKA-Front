import CryptoJS from "crypto-js";

const key = import.meta.env.VITE_SECRET_KEY;

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