import React from 'react'
import {FaPlay} from 'react-icons/fa';
import {TbInfoCircleFilled} from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';

const VideoTitle = ({title, overview,movieId}) => {
  const navigate = useNavigate();
  return (
    <div className='w-sreen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl text-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-2  px-10 font-bold text-lg rounded-lg hover:bg-opacity-80' onClick={()=>navigate('/trailer/'+movieId)}><FaPlay className='inline' /><span className='p-2'>Play</span></button>
            <button className='mx-2 bg-gray-500 text-white p-2  px-10 text-lg rounded-lg bg-opacity-50'><TbInfoCircleFilled className='inline'/><span className='p-2'>More Info</span></button>
        </div>
    </div>
  )
}

export default VideoTitle