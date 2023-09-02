import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div className='min-h-screen'>
      <Header/>
      <div className='absolute opacity-95'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='bg_img'/>
      </div>
      <div className='flex justify-center items-center min-h-screen'>
      <form className='bg-black relative w-3/12 text-white p-10 bg-opacity-90 rounded-md'>
        <h1 className='py-4 text-3xl font-bold'>Sign In</h1>
        <input type='text' placeholder='email' className='p-2 my-2 w-full rounded-lg bg-slate-500 outline-none'/>
        <input type='password' placeholder='password' className='p-2 my-2 w-full rounded-lg bg-slate-500 outline-none'/>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>Sign In </button>
      </form>
      </div>
      
    </div>
  )
}

export default Login