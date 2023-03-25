import axios from "axios";
import { useEffect, useState } from "react";

const API_URL_BASE = 'https://api.themoviedb.org/3';
const TOP_RATING_SERIES_PATH = '/tv/top_rated?';
const TOP_POPULAR_SERIES_PATH = '/tv/popular?';
const TOP_TRENDING_SERIES_PATH = '/trending/tv/day?';
const TOP_RATING_MOVIES_PATH = '/movie/top_rated?';
const TOP_POPULAR_MOVIES_PATH = '/movie/popular?';
const TOP_TRENDING_MOVIES_PATH = '/trending/movie/day?';
const TOP_UPCOMMIG_MOVIES_PATH = '/movie/upcoming?';
const DETAILS_SERIES_PATH = '/tv/';
const LANGUAGE = 'es-MX'

const config = {
    apiKey: import.meta.env.VITE_API_KEY,
};


export const getTopTVShows = () => {
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: responseRating } = await axios.get(`${API_URL_BASE}${TOP_RATING_SERIES_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
                const { data: responsePopular } = await axios.get(`${API_URL_BASE}${TOP_POPULAR_SERIES_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
                const { data: responseTrending } = await axios.get(`${API_URL_BASE}${TOP_TRENDING_SERIES_PATH}api_key=${config.apiKey}`);
                setResults([responseRating.results, responsePopular.results, responseTrending.results]);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    return {
        results,
        loading
    }
}


export const getDetailsTVShows = (id) => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}${DETAILS_SERIES_PATH}${id}?api_key=${config.apiKey}&language=${LANGUAGE}`);
                setDetails(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    return {
        details,
        loading
    }
}

export const getTopMoves = () => {
    const [results, setResults] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: responseRating } = await axios.get(`${API_URL_BASE}${TOP_RATING_MOVIES_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
                const { data: responsePopular } = await axios.get(`${API_URL_BASE}${TOP_POPULAR_MOVIES_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
                const { data: responseTrending } = await axios.get(`${API_URL_BASE}${TOP_TRENDING_MOVIES_PATH}api_key=${config.apiKey}`);
                let responseUpcoming = new Array();
                for (let index = 0; index < 5; index++) {
                    const { data: response } = await axios.get(`${API_URL_BASE}${TOP_UPCOMMIG_MOVIES_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=${index + 1}`);
                    responseUpcoming.push(response.results);
                }

                setResults([responseRating.results, responsePopular.results, responseTrending.results, responseUpcoming]);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    return {
        results,
        loading
    }
}