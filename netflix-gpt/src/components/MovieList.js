import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    if(!movies) return;
  return (
    <div className='px-2'>
        <h1 className='text-2xl py-2 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
                {movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default MovieList