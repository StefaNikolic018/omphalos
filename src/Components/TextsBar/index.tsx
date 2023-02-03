import { TextItem } from './TextItem';
import React, { memo, useMemo } from 'react';

import { IText } from 'src/interfaces/texts';

const index = ({
  texts,
  selectedTextID,
  setSelectedText,
}: {
  texts: IText[];
  selectedTextID: string | undefined;
  setSelectedText: React.Dispatch<React.SetStateAction<any>>;
}) => {
  // TODO:
  // 1. Fix flex spacing or change it for the grid because it has huge spacing between rows

  const renderTexts = useMemo(
    () =>
      texts.map((text: IText) => (
        <TextItem
          key={text.id}
          text={text}
          selectedTextID={selectedTextID}
          setSelectedText={setSelectedText}
        />
      )),
    [setSelectedText, selectedTextID, texts]
  );

  return (
    <div className='w-[35%] h-[80%] z-20 p-2 border-2 dark:border-[#ffffffdb] border-zinc-700 rounded-xl bg-[#ffffff72] dark:bg-zinc-900  flex flex-col flex-wrap'>
      <button
        className='text-center block py-1 mb-2 border-2 dark:border-[#ffffffdb] border-zinc-700 rounded-xl text-black dark:text-white hover:bg-orange-500 transition-colors duration-200 w-full'
        onClick={() =>
          setSelectedText({
            body: undefined,
            name: '',
            id: undefined,
          })
        }
      >
        Add new
      </button>
      <div className='flex gap-3 flex-row flex-wrap h-[90%]'>{renderTexts}</div>
    </div>
  );
};

export default memo(index);
