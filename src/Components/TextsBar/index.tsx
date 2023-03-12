import React, { memo, useCallback } from 'react'

import Swiper from './Swiper'

import { IText } from 'src/interfaces/texts'

import { HiSearchCircle } from 'react-icons/hi'
import { BsFillPlusSquareFill } from 'react-icons/bs'

const index = ({
  texts,
  selectedTextID,
  setSelectedText
}: {
  texts: IText[]
  selectedTextID: string | undefined
  setSelectedText: React.Dispatch<React.SetStateAction<any>>
}) => {
  const resetText = useCallback(
    () =>
      setSelectedText({
        body: '',
        name: '',
        id: undefined
      }),
    []
  )

  return (
    <div className="relative z-20 flex h-[20%] w-full flex-row flex-wrap items-center justify-center rounded-xl border-2 border-zinc-700  bg-[#ffffff72] p-2 dark:border-[#ffffffdb] dark:bg-zinc-900">
      <div className="absolute top-3 -right-5 flex flex-col gap-1 rounded-3xl border border-zinc-700 bg-[#ffffff72] p-2 dark:border-[#ffffffdb] dark:bg-zinc-900">
        <BsFillPlusSquareFill
          className=" duration-250 z-30 cursor-pointer rounded-2xl border border-zinc-900 bg-zinc-900 text-4xl text-orange-300 transition-all hover:scale-105 hover:text-orange-400 hover:shadow-md"
          onClick={resetText}
        />
        <HiSearchCircle className=" duration-250 z-30 cursor-pointer rounded-2xl border border-zinc-900 bg-orange-100 text-4xl text-zinc-900 transition-all hover:scale-105 hover:bg-orange-200 hover:shadow-md" />
      </div>
      <Swiper
        texts={texts}
        selectedTextID={selectedTextID}
        setSelectedText={setSelectedText}
      />
    </div>
  )
}

export default memo(index)
