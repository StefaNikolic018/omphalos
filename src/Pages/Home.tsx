import React from 'react';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';
import bg from './../assets/background.jpg';
import Snowfall from 'react-snowfall';
import useGlobalContext from '../Context/Global/useGlobalContext';

export default function Home() {
  // TODO: Conditional rendering for Login and other parts
  const { dark } = useGlobalContext();
  return (
    <div className='flex flex-row'>
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
  );
}
