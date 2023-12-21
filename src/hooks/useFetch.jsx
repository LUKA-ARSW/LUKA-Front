import { useState, useEffect } from 'react';

import useJsonParser from '@hooks/useJsonParser';

function useFetch(url, body, headers, method='GET') {

    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { parseJson } = useJsonParser();
  

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchData = async () => {
            try {
                const response = await fetch(url, {
                    method: method,
                    headers: headers,
                    body: body,
                    signal: signal
                })
                .then(resp => resp.text())
                .then(data => parseJson(data));
                setResponse(response);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

        return () => abortController.abort();
    }, [url, body, headers, method, parseJson]);

    return { response, isLoading, error };

}

export default useFetch;