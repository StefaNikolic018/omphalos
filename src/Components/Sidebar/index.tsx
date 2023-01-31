import React, { memo } from 'react';
import ModeSwitch from './ModeSwitch';
import Tooltip from '../Shared/Tooltip';
import useFirebaseContext from '../../Context/Firebase/useFirebaseContext';

import { BiLogOutCircle } from 'react-icons/bi';
import logo from '../../assets/omphalos-logo-custom.png';

const index = () => {
  const { user, logout } = useFirebaseContext();
  return (
    <div className='flex flex-row justify-between items-center md:flex-col md:h-screen p-3 w-30 bg-neutral-100 dark:bg-zinc-900 dark:text-neutral-100 text-zinc-900 shadow-md md:dark:shadow-neutral-100 md:shadow-zinc-900'>
      <div className='space-y-5'>
        <div className='flex items-center justify-between rounded-3xl bg-gray-300 dark:bg-zinc-800 p-2 hover:rounded-xl transition-all duration-200 ease-liner dark:hover:bg-zinc-700 border border-y-transparent border-x-orange-400 border-x-2'>
          <h2>
            <img
              className='w-16 dark:invert dark:saturate-0'
              src={logo}
              alt='Omphalos Logo'
            />
          </h2>
        </div>
        <hr className='mx-auto h-1 bg-gray-300 rounded border-0 dark:bg-zinc-800 hidden md:visible' />
        {!!user && (
          <div className='flex-center flex-col'>
            <ul className='pt-2 pb-4 space-y-1 text-sm'>
              <li>
                <Tooltip text={user.displayName}>
                  <img
                    src={user.photoURL}
                    alt='User'
                    className='w-16 h-16 rounded-full border-4 border-orange-500 mb-4 cursor-pointer hover:opacity-80'
                  />
                </Tooltip>
              </li>
              <li>
                <Tooltip text='Logout'>
                  <button
                    className='w-2/3 mx-auto rounded-3xl mb-3 bg-gray-300 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 px-2 py-1 hover:rounded-xl transition-all duration-200 ease-liner hover:text-orange-600 dark:hover:text-orange-600 dark:shadow-zinc-400 hover:shadow-sm flex justify-center group'
                    onClick={logout}
                  >
                    <BiLogOutCircle className='text-4xl dark:text-neutral-100 group-hover:text-orange-400' />
                  </button>
                </Tooltip>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className='flex items-center p-2 md:mt-12 space-x-4 justify-self-end'>
        <ModeSwitch />
      </div>
    </div>
  );
};

export default memo(index);
