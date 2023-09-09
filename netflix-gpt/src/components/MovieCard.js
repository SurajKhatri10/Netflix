import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN_URL + posterPath} alt="poster" className=' w-40 hover:p-3'/>
    </div>
  )
}

export default MovieCard