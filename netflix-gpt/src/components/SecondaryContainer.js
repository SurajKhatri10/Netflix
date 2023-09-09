import React from 'react';
import MovieList from './MovieList';
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies);
  return (
    <div  className='bg-black'>
      <div className='-mt-60 relative z-10'>
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
        <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
        <MovieList title="Popular" movies={movies.popularMovies}/>
        
        <MovieList title="Classic" movies={movies.nowPlayingMovies}/>   
      </div> 
    </div>
  )
}

export default SecondaryContainer