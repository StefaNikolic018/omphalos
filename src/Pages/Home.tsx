import React from 'react';
import { Outlet } from 'react-router-dom';
import Snowfall from 'react-snowfall';

import Sidebar from '../Components/Sidebar';
import Loader from '../Components/Loader';
import bg from './../assets/background.jpg';
import useGlobalContext from '../Context/Global/useGlobalContext';
import FirebaseContextProvider from '../Context/Firebase/FirebaseContext';

export default function Home() {
  // TODO: Conditional rendering for Login and other parts
  const { dark, isInit } = useGlobalContext();

  return !isInit ? (
    <Loader />
  ) : (
    <FirebaseContextProvider>
      <div className='flex flex-row home dark:home-black'>
        <Sidebar />
        <div className='relative w-full'>
          <img
            src={bg}
            alt='Bg'
            className='absolute top-0 left-0 w-full h-screen opacity-10 dark:opacity-[3%] z-0'
          />
          <Snowfall
            snowflakeCount={25}
            style={{ width: '100%' }}
            color={dark ? 'white' : 'black'}
          />
          <Outlet />
        </div>
      </div>
    </FirebaseContextProvider>
  );
}