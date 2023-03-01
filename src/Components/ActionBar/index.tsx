import React, { memo, useMemo } from 'react';
import { formatText } from '../../utils/formatText';

const index = ({
  text,
  highlightWord,
}: {
  text: String | undefined;
  highlightWord: (word: String) => void;
}) => {
  const length = useMemo(
    () => (!!text?.length ? formatText(text!).split(' ').length : 0),
    [text]
  );
  return (
    <div className='w-[35%] h-full z-20 p-2 border-2 dark:border-[#ffffffdb] border-zinc-700 rounded-xl bg-[#ffffff72] dark:bg-zinc-900  flex flex-col flex-wrap text-center'>
      <input
        type='text'
        className='text-black dark:text-white dark:bg-[#ffffff1e] bg-[#00000020] text-xl text-center p-2 rounded-xl'
        placeholder='Enter search words separated by comma'
      />
      <h3 className='my-3'>ALL WORDS COUNT: {length.toLocaleString()}</h3>
    </div>
  );
};

export default memo(index);
