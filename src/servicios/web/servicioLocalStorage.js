import servicioEncriptado from "../security/servicioEncriptado";

function getValue(key){
    const item = window.localStorage.getItem(key);
    if(item == null){
        throw new Error("No existe el valor");
    }
    const decryptedValue = servicioEncriptado.decrypt(item);
    return decryptedValue;
};

function setValue(key, value){
    const cryptedValue = servicioEncriptado.encrypt(value);
    window.localStorage.setItem(key, cryptedValue);
};

export default {
    getValue,
    setValue
};