import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-sreen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl text-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-2  px-10 text-lg rounded-lg hover:bg-opacity-80'>▶Play</button>
            <button className='mx-2 bg-gray-500 text-black p-2  px-10 text-lg rounded-lg bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle