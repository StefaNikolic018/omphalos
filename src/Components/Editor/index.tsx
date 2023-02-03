import React, { useState, useRef, useCallback, memo, ChangeEvent } from 'react';

import ReactQuill from 'react-quill';
import { Delta as TypeDelta, Sources } from 'quill';

import { IText } from 'src/interfaces/texts';

import 'react-quill/dist/quill.snow.css';
import '../../css/quill.css';
import useAuth from '../../Context/Firebase/useAuth';

const index = ({ text }: { text: IText | undefined }) => {
  // TODO:
  // 1. Create custom hook for adding new text
  // 2. Create input for title of the text
  // 3. Create button, form and logic for text save
  const [current, setCurrent] = useState({
    name: text?.name || '',
    body: text?.body || '',
  });
  const { user, addNewText } = useAuth();

  const submitText = useCallback(() => {
    addNewText(current.name, current.body, user.uid);
  }, [current.body, current.name, user.uid]);

  const onNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setCurrent({ ...current, name: event.target.value });
    },
    [current]
  );

  const onEditorChange = useCallback(
    (
      value: string,
      delta: TypeDelta,
      source: Sources,
      editor: ReactQuill.UnprivilegedEditor
    ) => {
      setCurrent({ ...current, body: value });
    },
    [current]
  );
  console.log('curr: ', current);
  // console.log('user: ', user.uid);

  return (
    <div className='w-7/12 h-[80%] z-10 relative'>
      <input
        id='text-name'
        type='text'
        value={current.name}
        placeholder='Name your story'
        className='text-black dark:text-white dark:bg-[#ffffff1e] bg-[#00000020] absolute top-0 rounded-t-xl px-3 py-1 w-full text-center uppercase text-lg font-bold focus-visible:outline-0'
        onChange={onNameChange}
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
        value={current.body}
        onChange={onEditorChange}
      />
    </div>
  );
};

export default memo(index);
