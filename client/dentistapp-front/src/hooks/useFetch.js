import { useEffect, useRef, useState } from "react";


export const useFetch = (url, requestOptions) => {

    const isMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {

            isMounted.current = false;
        };

    }, []);


    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url, requestOptions)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {

                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch((e) => {

                console.log(e);

                setState({
                    loading: false,
                    error: 'Hubo un error cargando los datos',
                    data: null
                })
            })
    }, [url]);


    return state;
};
