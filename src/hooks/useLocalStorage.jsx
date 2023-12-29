/* eslint-disable no-extra-semi */
import { useCallback } from "react";
import useEncryption from "@hooks/useEncryption";
import useJsonParser from "@hooks/useJsonParser";

const secretKey = import.meta.env.VITE_SECRET_KEY;

function useLocalStorage(key, initialValue) {

    const { encrypt, decrypt } = useEncryption(secretKey);
    const { parseJson } = useJsonParser();

    const readValue = useCallback(() => {
        let currentItem = initialValue;
        try {
            const item = decrypt(window.localStorage.getItem(key));
            currentItem = parseJson(item) ?? initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
        }

        return currentItem;
    }, [key, initialValue, decrypt, parseJson]);

    const changeValue = (newValue) => {
        try {
            const valueToStore = encrypt(JSON.stringify(newValue));
            window.localStorage.setItem(key, valueToStore);
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    };

    return {
        readValue,
        changeValue
    };

};

export default useLocalStorage;