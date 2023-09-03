import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {

  const [isLoginForm,setIsLoginForm] = useState(true);
  const [errorMsg,setErrorMsg] = useState(null);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleOnClick = ()=>{
    const msg = validateData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if(msg) return;

    if(!isLoginForm){
      //sign up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name.current.value
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName } = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName}));
          navigate('/browse')
        }).catch((error) => {
          setErrorMsg(error.message);
        });
        
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode +" - "+ errorMessage);
      });
    }else{
      //sign in / login
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        navigate('/browse')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode +" - "+ errorMessage);
      });
    }
  }

  return (
    <div className='min-h-screen'>
      <Header/>
      <div className='absolute opacity-95'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg'
        alt='bg_img'/>
      </div>
      <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={(e)=>e.preventDefault()} className='bg-black relative w-3/12 text-white p-10 bg-opacity-90 rounded-md'>
        <h1 className='py-4 text-3xl font-bold'>{isLoginForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isLoginForm && <input type='text' placeholder='Name' ref={name} required className='p-2 my-2 w-full rounded-lg bg-slate-500 outline-none'/>}

        <input type='text' ref={email} placeholder='email' required className='p-2 my-2 w-full rounded-lg bg-slate-500'/>

        <input type='password' ref={password} placeholder='password' required className='p-2 my-2 w-full rounded-lg bg-slate-500 outline-none'/>
        {errorMsg && <span className='text-red-600 text-bold text-lg'>{errorMsg}</span>}
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleOnClick}>
          {isLoginForm ? 'Sign In' : 'Sign Up'}
        </button>
        <div className='py-4' onClick={toggleSignIn}>
          {isLoginForm ? <p><span className='text-gray-500'>New to Netflix?</span> Sign Up Now</p>:<p><span className='text-gray-500'>Already a User!</span> Sign In Now</p>}
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Login;