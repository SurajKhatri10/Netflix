import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_Options } from '../utils/constants';

const PlayTrailer = () => {
    const [trailerKey,setTrailerKey] = useState();
    const {id} = useParams();

    useEffect(()=>{
        getTrailer();
    },[])
    const getTrailer = async() => {
        const movies = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_Options);

        const json = await movies.json();
        const filteredData = json.results.filter(result => result.type === 'trailer');

        const trailer = filteredData[0] || json.results[0];
        setTrailerKey(trailer.key);
        console.log(trailerKey);
    }
    
  return (
    <div>
        <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" +trailerKey+"?autoplay=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
        </iframe>
    </div>
  )
}

export default PlayTrailer