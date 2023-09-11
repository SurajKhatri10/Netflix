import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName } = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName}));
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser())
          navigate('/');
        }
      });

      return () =>unsubscribe();
},[]);

  const onSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className="w-40" src={LOGO}
        alt='logo'/>

        {user && <div className='flex text-white'>
          <img src={USER_ICON}
           alt='usericon' className='w-11 h-11'/>
          <div className='p-3'>
            <span>{user.displayName}</span> 
            <button onClick={onSignOut}> (Sign out)</button>
          </div>
        </div>}
    </div>
  )
}

export default Header