import React, { useCallback } from 'react';
import Snowfall from 'react-snowfall';
import { useNavigate } from 'react-router-dom';

import Marquee from './Marquee';

import logo from '../../assets/logo.png';
import useGlobalContext from '../../Context/Global/useGlobalContext';

export default function index() {
  const navigate = useNavigate();
  const { dark, setDark } = useGlobalContext();

  const closeIntro = useCallback(() => {
    localStorage.setItem('mode', dark ? 'dark' : 'neutral-100');
    navigate('/login');
  }, [dark]);

  return (
    <div className='w-screen h-screen dark:bg-zinc-900 bg-neutral-100 flex flex-col items-center pt-5 overflow-hidden '>
      <h1 className='text-3xl animate-pulse dark:text-neutral-100 text-zinc-900'>
        Select your color mode by clicking on the logo:
      </h1>
      <Snowfall color='orange' style={{ width: '100vw' }} />
      <img
        className='dark:invert dark:saturate-0 invert-0 saturate-100 animate-bounce-slow transition-all duration-500 drop-shadow-xl hover:opacity-60 h-3/6 w-4/6 cursor-pointer mt-40'
        src={logo}
        alt='Omphalos'
        onClick={() => setDark((prev) => !prev)}
      />
      <button
        className='rounded-2xl bg-zinc-900 text-neutral-100 dark:bg-neutral-100 dark:text-zinc-900 py-1 px-4 mt-5 hover:py-2 hover:px-5 hover:mt-2 hover:opacity-90 hover:dark:bg-gray-200 transition-all duration-250 border-orange-600 border-4'
        onClick={closeIntro}
      >
        CONTINUE
      </button>
      <Marquee />
    </div>
  );
}
