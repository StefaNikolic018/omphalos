import React, { memo, useCallback } from 'react';

import { HiSearchCircle } from 'react-icons/hi';
import { BsFillPlusSquareFill } from 'react-icons/bs';

import { IText } from 'src/interfaces/texts';

import Swiper from './Swiper/Swiper';

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
      <BsFillPlusSquareFill
        className=' cursor-pointer text-4xl rounded-xl text-orange-500 hover:text-orange-300 z-30 absolute -right-12 top-[15%] bg-zinc-900 border border-zinc-900 hover:scale-105 transition-all duration-250 hover:shadow-md'
        onClick={resetText}
      />
      <HiSearchCircle className=' cursor-pointer text-4xl rounded-xl text-zinc-200 hover:text-zinc-300 z-30 absolute -right-12 top-[50%] bg-zinc-900 border border-zinc-900 hover:scale-105 transition-all duration-250 hover:shadow-md' />
      <Swiper
        texts={texts}
        selectedTextID={selectedTextID}
        setSelectedText={setSelectedText}
      />
    </div>
  );
};

export default memo(index);
