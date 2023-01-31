import React, { memo } from 'react';
import { FcGoogle } from 'react-icons/fc';

import Blob from '../Shared/Blob';

import useFirebaseContext from '../../Context/Firebase/useFirebaseContext';

const Login = () => {
  const { googleLogin } = useFirebaseContext();

  return (
    <div className='dark:text-neutral-100 text-zinc-900 flex flex-col justify-center items-center w-full mobile-content-h md:min-h-screen z-10 relative'>
      <div className='z-10 flex flex-col relative w-10/12 md:w-[40%]'>
        <Blob />
      </div>
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl bg-[#ffffffcc] hover:bg-white dark:bg-zinc-800 dark:hover:bg-zinc-900 border-2 border-zinc-900 dark:border-[#ffffffcc] transition-all duration-150 shadow-xl cursor-pointer py-2 px-2 z-10'
        onClick={googleLogin}
      >
        <FcGoogle className='text-3xl ' />
      </div>
    </div>
  );
};

export default memo(Login);
