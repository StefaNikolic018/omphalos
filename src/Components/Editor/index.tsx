import React, { useRef, useCallback, memo, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import { CurrentTextT } from 'src/interfaces/texts';

import useAuth from '../../Context/Firebase/useAuth';

import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';

const index = ({ text }: { text: CurrentTextT }) => {
  // TODO:
  // 1. Create logic for adding new text ✔
  // 2. Create input for title of the text ✔
  // 3. Install react hook form ✔
  // 4. and add validation to texts(problem with registering quill) ✔
  // 5. because of the problem with quill, need to implement own custom validation ✔
  // 6. Need to put texts bar to the top and add word search functionality on the side!!!

  const { user, addNewText } = useAuth();

  const [isValid, setIsValid] = useState(true);

  // References for input fields
  const nameRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<any>(null);

  const submitText = useCallback(() => {
    if (nameRef.current?.value !== '' && bodyRef.current?.value !== '') {
      setIsValid(true);
      addNewText(nameRef.current?.value!, bodyRef.current.value, user.uid);
    } else {
      setIsValid(false);
    }
  }, [nameRef.current?.value, bodyRef.current?.value, user.uid]);

  // If user starts with the new text
  useEffect(() => {
    if (text.name === '') {
      nameRef.current?.focus();
    }
  }, [text.name]);

  return (
    <div className='w-7/12 h-[80%] z-10 relative'>
      <input
        id='text-name'
        type='text'
        defaultValue={text.name}
        placeholder='Name your story'
        className='text-black dark:text-white dark:bg-[#ffffff1e] bg-[#00000020] absolute top-0 rounded-t-xl px-3 py-1 w-full text-center uppercase text-lg font-bold focus-visible:outline-0'
        ref={nameRef}
        autoFocus
      />
      <button
        className={`absolute py-2 px-3 text-zinc-800 right-[0.2%] top-9 ${
          // isValid ?
          'bg-orange-500 hover:bg-orange-400 cursor-pointer'
          // : 'bg-orange-400'
        }`}
        onClick={submitText}
        // disabled={!isValid}
      >
        SUBMIT
      </button>
      <ReactQuill
        id='text-body'
        className='bg-[#ffffffdb] dark:bg-zinc-900  border-2 dark:border-[#ffffffdb]  border-zinc-700 text-black dark:text-white rounded-xl w-full h-full pt-8'
        placeholder='Enter your story here'
        theme='snow'
        value={text.body ? text.body : bodyRef.current?.value}
        ref={bodyRef}
      />
      {!isValid && (
        <div className='w-full text-center text-orange-800 font-bold text-xl mt-2 animate-pulse absolute bottom-2'>
          Please fill out all fields and tell us your story properly!
        </div>
      )}
    </div>
  );
};

export default memo(index);
