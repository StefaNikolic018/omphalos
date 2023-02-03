import React, { useRef, useCallback, memo } from 'react';

import ReactQuill from 'react-quill';

import { CurrentTextT } from 'src/interfaces/texts';

import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';
import useAuth from '../../Context/Firebase/useAuth';

const index = ({ text }: { text: CurrentTextT }) => {
  // TODO:
  // 1. Create logic for adding new text ✔
  // 2. Create input for title of the text ✔
  // 3. Install react hook form and add validation to texts
  const { user, addNewText } = useAuth();

  // References for input fields
  const nameRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<any>(null);

  const submitText = useCallback(() => {
    addNewText(nameRef.current?.value!, bodyRef.current.value, user.uid);
  }, [nameRef.current?.value, bodyRef.current?.value, user.uid]);

  // console.log('curr: ', text);

  return (
    <div className='w-7/12 h-[80%] z-10 relative'>
      <input
        id='text-name'
        type='text'
        defaultValue={text.name}
        placeholder='Name your story'
        className='text-black dark:text-white dark:bg-[#ffffff1e] bg-[#00000020] absolute top-0 rounded-t-xl px-3 py-1 w-full text-center uppercase text-lg font-bold focus-visible:outline-0'
        ref={nameRef}
      />
      <button
        className='absolute py-1.5 px-3 bg-orange-500 hover:bg-orange-400 text-zinc-800 right-0.5 top-9 '
        onClick={submitText}
      >
        SUBMIT
      </button>
      <ReactQuill
        id='text-body'
        className='bg-[#ffffffdb] dark:bg-zinc-900  border-2 dark:border-[#ffffffdb]  border-zinc-700 text-black dark:text-white rounded-xl w-full h-full pt-8'
        placeholder='Enter your story here'
        theme='snow'
        value={text.body}
        ref={bodyRef}
      />
    </div>
  );
};

export default memo(index);
