import React from 'react';
import { IText } from 'src/interfaces/texts';
export function TextItem({
  text,
  selectedTextID,
  setSelectedText,
}: {
  text: IText;
  selectedTextID: string | undefined;
  setSelectedText: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div
      className={`w-full h-full p-2 border bg-[#ffffff8d] dark:bg-zinc-800  text-black dark:text-white flex flex-col justify-start items-between rounded-xl cursor-pointer shadow-lg transition-all duration-200 hover:scale-[101%] ${
        selectedTextID === text.id
          ? 'border-orange-500'
          : ' border-white dark:border-zinc-700'
      }`}
      onClick={() =>
        setSelectedText({
          body: text.body,
          name: text.name,
          id: text.id,
        })
      }
    >
      <h1 className='font-bold text-sm'>{text.name}</h1>
      <hr />
      <p className='opacity-80 text-xs whitespace-pre-wrap truncate'>
        {text.body}
      </p>
    </div>
  );
}
