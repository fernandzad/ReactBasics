import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect( () => {
        const fetchResources = async () => {
            try {
                let response = await fetch(url);
                let data = await response.json();
                //This fragment of code only shows that the component Loader works fine
                await new Promise((resolve, reject) => setTimeout(resolve, 1000));

                setLoading(false);
                setData(data);             
            } catch (error) {
                setLoading(false);
                setError(error);                
            }
        }
        fetchResources();
    }, [ url ]);

    return { data, loading, error };
}

export default useFetch;