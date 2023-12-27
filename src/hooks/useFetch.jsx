import { useState, useEffect, useCallback } from 'react';

import useJsonParser from '@hooks/useJsonParser';

function useFetch(url, body, headers, method = 'GET') {

    const { parseJson } = useJsonParser();

    const [response, setResponse] = useState(null);
    const [pending, setPending] = useState(true);
    const [error, setError] = useState(null);
    const doFetch = useCallback(async (signal) => {
        setPending(true);
        const options = () => {
            const options = {
                method,
                headers,
                signal
            };

            return (method !== 'GET') ? { ...options, body } : options;
        };

        try {
            const data = await fetch(url, options());
            if (!data.ok) throw new Error(data.statusText);

            const response = await data.text();
            const parsedResponse = parseJson(response);
            setResponse(parsedResponse);
            setError(null);
        } catch (error) {
            setError(error);
            setResponse(null);
        } finally {
            setPending(false);
        }
    }, [url, body, headers, method, parseJson]);

    useEffect(() => {
        const abortController = new AbortController();
        doFetch(abortController.signal);

        return () => abortController.abort();
    }, [doFetch]);

    return { response, pending, error };

}

export default useFetch;