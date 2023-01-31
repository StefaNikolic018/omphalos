import React, { useState, useCallback, memo } from 'react';

import ReactQuill from 'react-quill';

import { IText } from 'src/interfaces/texts';

import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';

const index = ({ text }: { text: IText | undefined }) => {
  // TODO:
  // 1. Create custom hook for adding new text
  // 2. Create input for title of the text
  // 3. Create button, form and logic for text save

  return (
    <div className='w-7/12 h-[80%] z-10 relative'>
      <input
        type='text'
        value={text?.name}
        className='text-black dark:text-white dark:bg-[#ffffff1e] bg-[#00000020] absolute top-0 rounded-t-xl px-3 py-1 w-full text-center uppercase text-lg font-bold focus-visible:outline-0'
      />
      <ReactQuill
        className='bg-[#ffffffdb] dark:bg-zinc-900  border-2 dark:border-[#ffffffdb]  border-zinc-700 text-black dark:text-white rounded-xl w-full h-full pt-8'
        placeholder='Enter your story here'
        theme='snow'
        value={text?.body}
      />
    </div>
  );
};

export default memo(index);
