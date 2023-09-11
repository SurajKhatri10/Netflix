import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import PlayTrailer from './PlayTrailer';
import VideoBackground from './VideoBackground';


const Body = () => {
    
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>,
        },
        {
            path: '/browse',
            element: <Browse/>,
            
        },
        {
            path: 'trailer/:id',
            element: <PlayTrailer/>,
            
        }
    ]);
    
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
        
    </div>
  )
}

export default Body