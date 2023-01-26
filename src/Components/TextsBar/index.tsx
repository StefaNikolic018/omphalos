import React, { useMemo } from 'react';
import { IText } from 'src/interfaces/texts';

export default function index({
  texts,
  selectedText,
  setSelectedText,
}: {
  texts: IText[];
  selectedText: string | boolean;
  setSelectedText: React.Dispatch<React.SetStateAction<any>>;
}) {
  console.log(texts);

  const renderTexts = useMemo(
    () =>
      texts.map((text: IText) => (
        <div
          key={text.name}
          className={`w-[45%] h-[15%] p-2 border bg-[#ffffff8d] dark:bg-zinc-800  text-black dark:text-white flex flex-col justify-start items-between rounded-xl cursor-pointer shadow-lg transition-all duration-200 hover:scale-[101%] ${
            selectedText === text.id
              ? 'border-orange-500'
              : ' border-white dark:border-zinc-700'
          }`}
          onClick={() => setSelectedText(text.id)}
        >
          <h1 className='font-bold text-sm'>{text.name}</h1>
          <hr />
          <p className='opacity-80 text-xs whitespace-pre-wrap truncate'>
            {text.body}
          </p>
        </div>
      )),
    [setSelectedText, selectedText, texts]
  );

  return (
    <div className='w-[35%] h-[80%] z-20 p-2 border-2 dark:border-[#ffffffdb] border-zinc-700 rounded-xl bg-[#ffffff72] dark:bg-zinc-900  flex flex-col flex-wrap'>
      <button className='py-1 mb-2 rounded-xl flex justify-center items-center border-2 dark:border-[#ffffffdb] border-zinc-700 text-black dark:text-white hover:bg-orange-500 transition-colors duration-200'>
        Add new
      </button>
      {renderTexts}
    </div>
  );
}
