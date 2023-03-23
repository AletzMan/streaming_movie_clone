import axios from "axios";
import { useEffect, useState } from "react";

const API_URL_BASE = 'https://api.themoviedb.org/3';
const TOP_RATING_PATH = '/tv/top_rated?';
const LANGUAGE = 'es-MX'

const config = {
    apiKey: import.meta.env.VITE_API_KEY,
  };
  

export const getTopRatesTVShows = () => {
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}${TOP_RATING_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
                setResults(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [date])

    return {
        results,
        loading
    }
}