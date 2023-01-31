import React, { memo } from 'react';
import useGlobalContext from '../../Context/Global/useGlobalContext';

const ModeSwitch = () => {
  const { dark, setDark } = useGlobalContext();
  return (
    <input
      type='checkbox'
      className='appearance-none w-14 focus:outline-none checked:bg-zinc-900 border-2 border-zinc-900 checked:border-orange-400 h-8 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-orange-500 before:h-6 before:w-6 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5 py-0.5 checked:before:bg-neutral-100 cursor-pointer hover:before:opacity-60 before:transition-all before:duration-300'
      checked={dark}
      onChange={() => setDark((prev) => !prev)}
    />
  );
};

export default memo(ModeSwitch);
