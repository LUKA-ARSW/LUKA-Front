/* eslint-disable no-extra-semi */
import { useCallback, useState } from 'react';

import useFetch from '@hooks/useFetch';

function useAPI() {

    const [url, setUrl] = useState("");
    const [body, setBody] = useState({});
    const [headers, setHeaders] = useState({});
    const [method, setMethod] = useState(null);
    const { response, error } = useFetch(url, body, headers, method);

    const makeApiCall = useCallback((url, body, headers, method) => {
        setUrl(url);
        setBody(body);
        setHeaders(headers);
        setMethod(method);
    }, []);

    return { response, error, makeApiCall };

};

export default useAPI;
