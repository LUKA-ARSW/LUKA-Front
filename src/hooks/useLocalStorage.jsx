/* eslint-disable no-extra-semi */
import { useEffect, useState } from "react";
import useEncryption from "@hooks/useEncryption";

function useLocalStorage(key, initialValue) {

    const { encrypt, decrypt } = useEncryption(key);

    const changeValue = () => {
        let currentValue = initialValue;
        try {
            let item = decrypt(window.localStorage.getItem(key));
            currentValue = JSON.parse(item) ?? initialValue;
        } catch (error) {
            console.warn("Error al obtener el valor del localStorage ", error);
        }

        return currentValue;

    };

    const update = () => {
        const valueToStore = JSON.stringify(encrypt(value));
        window.localStorage.setItem(key, valueToStore);
    };

    const [value, setValue] = useState(changeValue);
    useEffect(update, [value, key, encrypt]);

    return [value, setValue];

};

export default useLocalStorage;