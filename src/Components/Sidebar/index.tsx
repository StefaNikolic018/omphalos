import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import Tooltip from '../Shared/Tooltip';
import ModeSwitch from './ModeSwitch';

interface navItem {
  text: string;
  url: string;
  icon: ReactNode;
}

const navItems = {
  guest: [
    {
      text: 'Login',
      url: '/login',
      icon: <AiOutlineLogin className='text-4xl dark:text-neutral-100' />,
    },
    {
      text: 'Register',
      url: '/register',
      icon: <AiOutlineUserAdd className='text-4xl dark:text-neutral-100' />,
    },
  ],
  user: [{}],
};

const renderNav = (items: navItem[]) => {
  return items.map((i) => (
    <li key={i.text}>
      <Tooltip text={i.text}>
        <Link
          className='block w-2/3 mx-auto rounded-3xl mb-3 bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 p-2 hover:rounded-xl transition-all duration-200 ease-liner hover:text-orange-600 dark:hover:text-orange-600 dark:shadow-zinc-400 hover:shadow-sm'
          to={i.url}
        >
          {i.icon}
        </Link>
      </Tooltip>
    </li>
  ));
};

export default function index() {
  return (
    <div className='flex flex-col justify-between items-center h-screen p-3 w-30 bg-neutral-100 dark:bg-zinc-900 dark:text-neutral-100 text-zinc-900 shadow-md dark:shadow-neutral-100 shadow-zinc-900'>
      <div className='space-y-5'>
        <div className='flex items-center justify-between rounded-3xl bg-gray-200 dark:bg-zinc-800 p-2 hover:rounded-xl transition-all duration-200 ease-liner dark:hover:bg-zinc-700 border-x border-x-orange-400'>
          <h2>
            <img
              className='w-16 dark:invert dark:saturate-0'
              src={logo}
              alt='Omphalos Logo'
            />
          </h2>
        </div>
        <hr className='mx-auto h-0.5 bg-gray-200 rounded border-0 dark:bg-zinc-800' />
        <div className='flex-1'>
          <ul className='pt-2 pb-4 space-y-1 text-sm'>
            {renderNav(navItems.guest)}
          </ul>
        </div>
      </div>
      {/* FOR LATER USAGE */}
      <div className='flex items-center p-2 mt-12 space-x-4 justify-self-end'>
        <ModeSwitch />
      </div>
    </div>
  );
}
