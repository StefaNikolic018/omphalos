import Content from '../Shared/Content';
import React from 'react';
import useGlobalContext from './../../Context/Global/useGlobalContext';

export default function Register() {
  const { dark } = useGlobalContext();

  return (
    <div className='dark:text-neutral-100 text-zinc-900 flex justify-center items-center w-full min-h-screen z-10'>
      <div className='p-52 rounded-xl z-10 bg-white dark:bg-black box-shadow-custom dark:box-shadow-custom-dark'>
        VOZDRA
      </div>
    </div>
  );
}
