import React, { memo, useCallback } from 'react';

import Swiper from './Swiper';

import { IText } from 'src/interfaces/texts';

import { HiSearchCircle } from 'react-icons/hi';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const index = ({
  texts,
  selectedTextID,
  setSelectedText,
}: {
  texts: IText[];
  selectedTextID: string | undefined;
  setSelectedText: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const resetText = useCallback(
    () =>
      setSelectedText({
        body: undefined,
        name: '',
        id: undefined,
      }),
    []
  );

  return (
    <div className='justify-center items-center w-full h-[20%] z-20 p-2 border-2 dark:border-[#ffffffdb] border-zinc-700 rounded-xl bg-[#ffffff72] dark:bg-zinc-900  flex flex-row flex-wrap relative'>
      <div className='absolute top-3 -right-16 rounded-3xl p-2 flex flex-col gap-1 border dark:border-[#ffffffdb] border-zinc-700 bg-[#ffffff72] dark:bg-zinc-900'>
        <BsFillPlusSquareFill
          className=' cursor-pointer text-4xl rounded-2xl text-orange-300 hover:text-orange-400 z-30 border border-zinc-900 bg-zinc-900 hover:scale-105 transition-all duration-250 hover:shadow-md'
          onClick={resetText}
        />
        <HiSearchCircle className=' cursor-pointer text-4xl rounded-2xl bg-orange-100 hover:bg-orange-200 border border-zinc-900 z-30 text-zinc-900 hover:scale-105 transition-all duration-250 hover:shadow-md' />
      </div>
      <Swiper
        texts={texts}
        selectedTextID={selectedTextID}
        setSelectedText={setSelectedText}
      />
    </div>
  );
};

export default memo(index);
