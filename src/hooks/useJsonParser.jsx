/* eslint-disable no-extra-semi */
import { useMemo } from "react";

function useJsonParser() {

    const simpleStringRegex = useMemo(() => new RegExp(/^[a-zA-Z0-9]+$/), []);

    const isJson = (json) => {
        return !simpleStringRegex.test(json);
    };

    const parseJson = (json) => {
        return isJson(json) ? JSON.parse(json) : json;
    };

    return { isJson, parseJson };

};

export default useJsonParser;