import React from 'react'
import { API_Options, IMG_CDN_URL } from '../utils/constants'
import { createSearchParams, useNavigate } from 'react-router-dom'

const MovieCard = ({movieId, posterPath}) => {
  const navigate = useNavigate();

  const posterClick = async (e)=>{
    
        navigate('/trailer/' + movieId);
      //   navigate({
      //     pathname: "trailer",
      //     search: createSearchParams({
      //         id: movieId
      //     }).toString()
      // });
  }
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN_URL + posterPath} alt="poster" className=' w-40 hover:p-3' id={movieId} onClick={posterClick}/>
    </div>
  )
}

export default MovieCard