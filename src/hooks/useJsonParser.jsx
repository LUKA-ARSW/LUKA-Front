/* eslint-disable no-extra-semi */
import { useCallback, useMemo } from "react";

function useJsonParser() {

    const simpleStringRegex = useMemo(() => new RegExp(/^[a-zA-Z0-9]+$/), []);

    const isJson = useCallback((json) => {
        return !!json && !simpleStringRegex.test(json);
    }, [simpleStringRegex]);

    const parseJson = useCallback((json) => {
        return isJson(json) ? JSON.parse(json) : json;
    }, [isJson]);

    return { isJson, parseJson };

};

export default useJsonParser;