import React from 'react';
import Snowfall from 'react-snowfall';

import Loader from '../Loader';
import Sidebar from '../Sidebar';
import bg from '../../assets/background.jpg';

import FirebaseContextProvider from '../../Context/Firebase/FirebaseContext';
import useGlobalContext from '../../Context/Global/useGlobalContext';



export default function Content({ children }: { children: React.ReactNode }) {
  const { dark, isInit } = useGlobalContext();
  return (
    <FirebaseContextProvider>
      <div className='relative dark:bg-zinc-900 w-screen overflow-x-hidden min-h-screen'>
        {!isInit ? (
          <Loader />
        ) : (
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
              {children}
            </div>
          </div>
        )}
      </div>
    </FirebaseContextProvider>
  );
}
