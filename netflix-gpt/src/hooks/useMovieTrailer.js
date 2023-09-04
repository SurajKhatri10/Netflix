import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieVideos = async(movieId) =>{
        const movies = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_Options);

        const json = await movies.json();
        const filteredData = json.results.filter(result => result.type === 'trailer');

        const trailer = filteredData[0] || json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(()=>{
        getMovieVideos(movieId);
    },[]);
}

export default useMovieTrailer;