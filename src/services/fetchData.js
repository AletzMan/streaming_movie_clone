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
const DETAILS_MOVIES_PATH = '/movie/';
const VIDEOS_SERIES_PATH = '/tv/';
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
                const { data: responseTrending } = await axios.get(`${API_URL_BASE}${TOP_TRENDING_SERIES_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
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
                const { data: response } = await axios.get(`${API_URL_BASE}${DETAILS_SERIES_PATH}${id}?api_key=${config.apiKey}&language=${LANGUAGE}&append_to_response=similar,credits,videos`);
                setDetails(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [id])

    return {
        details,
        loading
    }
}

export const getSesionTVShows = (id, numberSesion) => {
    const [season, setSeasons] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}${VIDEOS_SERIES_PATH}${id}/season/${numberSesion}?api_key=${config.apiKey}&language=${LANGUAGE}`);
                setSeasons(response.episodes);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [numberSesion])

    return {
        season,
        loading
    }
}

export const getTrendingTVShows = () => {
    const [treandingTV, setTrendingTV] = useState({});
    const [loadingTrendingTV, setLoadingTrendingTV] = useState(true);

    useEffect(() => {
        setLoadingTrendingTV(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/trending/tv/day?api_key=${config.apiKey}&language=${LANGUAGE}`);
                setTrendingTV(response);
            } catch (error) {
                console.error(error)
            }
            setLoadingTrendingTV(false);
        }
        fetchData();
    }, [])

    return {
        treandingTV,
        loadingTrendingTV
    }
}

/*
export const getSimilarTVShows = (id) => {
    const [similarSearch, setSimilarSearch] = useState({});
    const [loadingSimilar, setLoadingSearch] = useState(true);

    useEffect(() => {
        setLoadingSearch(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}${VIDEOS_SERIES_PATH}${id}/similar?api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
                setSimilarSearch(response.results);
            } catch (error) {
                console.error(error)
            }
            setLoadingSearch(false);
        }
        fetchData();
    }, [])

    return {
        similarSearch,
        loadingSimilar
    }
}
*/
/*
export const getVideosTVShows = (id) => {
    const [videos, setVideos] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}${VIDEOS_SERIES_PATH}${id}/videos?api_key=${config.apiKey}&language=${LANGUAGE}`);
                setVideos(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    return {
        videos,
        loading
    }
}
*/
export const getTVShowsByCompanie = (id, page) => {
    const [searchMovie, setSearchMovie] = useState({});
    const [loadingMovie, setLoadingMovie] = useState(true);

    useEffect(() => {
        setLoadingMovie(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/discover/tv?api_key=${config.apiKey}&language=${LANGUAGE}&sort_by=vote_count.desc&page=${page}&with_companies=${id}`);
                setSearchMovie(response);
            } catch (error) {
                console.error(error)
            }
            setLoadingMovie(false);
        }
        fetchData();
    }, [page])

    return {
        searchMovie,
        loadingMovie
    }
}

/*
export const getTVShowCredits = (id) => {
    const [credits, setCredits] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/tv/${id}/credits?api_key=${config.apiKey}&language=${LANGUAGE}`);
                setCredits(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    return {
        credits,
        loading
    }
}
*/

export const getTVShowsByGenrer = (id, page) => {
    const [searchMovie, setSearchMovie] = useState({});
    const [loadingMovie, setLoadingMovie] = useState(true);

    useEffect(() => {
        setLoadingMovie(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/discover/tv?api_key=${config.apiKey}&language=${LANGUAGE}&sort_by=vote_count.desc&page=${page}&with_genres=${id}`);
                setSearchMovie(response);
            } catch (error) {
                console.error(error)
            }
            setLoadingMovie(false);
        }
        fetchData();
    }, [page])

    return {
        searchMovie,
        loadingMovie
    }
}

export const getSearchTVShows = (query, page) => {
    const [searchMovie, setSearchMovie] = useState({});
    const [loadingMovie, setLoadingMovie] = useState(true);

    useEffect(() => {
        setLoadingMovie(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/search/tv?api_key=${config.apiKey}&language=${LANGUAGE}&query=${query}&page=${page}`);
                setSearchMovie(response);
            } catch (error) {
                console.error(error)
            }
            setLoadingMovie(false);
        }
        fetchData();
    }, [page, query])

    return {
        searchMovie,
        loadingMovie
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
                const { data: responseTrending } = await axios.get(`${API_URL_BASE}${TOP_TRENDING_MOVIES_PATH}api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
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


export const getDetailsMovie = (id) => {
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}${DETAILS_MOVIES_PATH}${id}?api_key=${config.apiKey}&language=${LANGUAGE}&append_to_response=similar,credits,videos`);
                setDetails(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [id])

    return {
        details,
        loading
    }

}

/*
export const getSimilarMovies = (id) => {
    const [similarSearch, setSimilarSearch] = useState({});
    const [loadingSimilar, setLoadingSearch] = useState(true);

    useEffect(() => {
        setLoadingSearch(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}${DETAILS_MOVIES_PATH}${id}/similar?api_key=${config.apiKey}&language=${LANGUAGE}&page=1`);
                setSimilarSearch(response.results);
            } catch (error) {
                console.error(error)
            }
            setLoadingSearch(false);
        }
        fetchData();
    }, [])

    return {
        similarSearch,
        loadingSimilar
    }
}
*/

export const getMoviesByCompanie = (id, page) => {
    const [searchMovie, setSearchMovie] = useState({});
    const [loadingMovie, setLoadingMovie] = useState(true);

    useEffect(() => {
        setLoadingMovie(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/discover/movie?api_key=${config.apiKey}&language=${LANGUAGE}&sort_by=vote_count.desc&page=${page}&with_companies=${id}`);
                setSearchMovie(response);
            } catch (error) {
                console.error(error)
            }
            setLoadingMovie(false);
        }
        fetchData();
    }, [page])

    return {
        searchMovie,
        loadingMovie
    }
}

/*
export const getMovieCredits = (id) => {
    const [credits, setCredits] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/movie/${id}/credits?api_key=${config.apiKey}&language=${LANGUAGE}`);
                setCredits(response);
            } catch (error) {
                console.error(error)
            }
            setLoading(false);
        }
        fetchData();
    }, [])

    return {
        credits,
        loading
    }
}
*/

export const getMoviesByGenrer = (id, page) => {
    const [searchMovie, setSearchMovie] = useState({});
    const [loadingMovie, setLoadingMovie] = useState(true);

    useEffect(() => {
        setLoadingMovie(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/discover/movie?api_key=${config.apiKey}&language=${LANGUAGE}&sort_by=vote_count.desc&page=${page}&with_genres=${id}`);
                setSearchMovie(response);
                console.log('aqui es')
                console.log(`${API_URL_BASE}/discover/movie?api_key=${config.apiKey}&language=${LANGUAGE}&sort_by=vote_count.desc&page=${page}&with_genres=${id}`)
            } catch (error) {
                console.error(error)
            }
            setLoadingMovie(false);
        }
        fetchData();
    }, [id, page])

    return {
        searchMovie,
        loadingMovie
    }
}

export const getSearchMovies = (query, page) => {
    const [searchMovie, setSearchMovie] = useState({});
    const [loadingMovie, setLoadingMovie] = useState(true);

    useEffect(() => {
        setLoadingMovie(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/search/movie?api_key=${config.apiKey}&language=${LANGUAGE}&query=${query}&page=${page}`);
                setSearchMovie(response);
            } catch (error) {
                console.error(error)
            }
            setLoadingMovie(false);
        }
        fetchData();
    }, [page, query])

    return {
        searchMovie,
        loadingMovie
    }
}

/*
export const getTrailerMovies = (id) => {
    const [searchVideo, setSearchVideo] = useState({});
    const [loadingVideo, setLoadingVideo] = useState(true);

    useEffect(() => {
        setLoadingVideo(true);
        const fetchData = async () => {
            try {
                let response;
                response = await axios.get(`${API_URL_BASE}/movie/${id}/videos?api_key=${config.apiKey}&language=${LANGUAGE}`);
                console.log(response.data)
                if (response.data.results.length === 0)
                    response = await axios.get(`${API_URL_BASE}/movie/${id}/videos?api_key=${config.apiKey}&language=${'es-US'}`);
                setSearchVideo(response.data);
            } catch (error) {
                console.error(error)
            }
            setLoadingVideo(false);
        }
        fetchData();
    }, [id])

    return {
        searchVideo,
        loadingVideo
    }
}
*/
export const getCollections = (id) => {
    const [searchCollection, setSearchCollection] = useState({});
    const [loadingCollection, setLoadingCollection] = useState(true);

    useEffect(() => {
        setLoadingCollection(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/collection/${id}?api_key=${config.apiKey}&language=${LANGUAGE}`);
                setSearchCollection(response);

            } catch (error) {
                setSearchCollection(error.response.status);
                console.error(error);
            }
            setLoadingCollection(false);
        }
        fetchData();
    }, [id])

    return {
        searchCollection,
        loadingCollection
    }
}

export const getBiography = (id) => {
    const [biography, setBiography] = useState({});
    const [loadingBiography, setLoadingBiography] = useState(true);

    useEffect(() => {
        setLoadingBiography(true);
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(`${API_URL_BASE}/person/${id}?api_key=${config.apiKey}&language=${'es-US'}&append_to_response=credits,tv_credits`);
                setBiography(response);

            } catch (error) {
                setSearchCollection(error.response.status);
                console.error(error);
            }
            setLoadingBiography(false);
        }
        fetchData();
    }, [id])

    return {
        biography,
        loadingBiography
    }
}