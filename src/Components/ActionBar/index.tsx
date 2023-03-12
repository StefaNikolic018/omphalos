import React, { memo, useMemo } from 'react'
import { formatText } from '../../utils/formatText'

const index = ({
  text,
  highlightWord
}: {
  text: String | undefined
  highlightWord: (word: String) => void
}) => {
  const length = useMemo(
    () => (!!text?.length ? formatText(text!).split(' ').length : 0),
    [text]
  )
  return (
    <div className="z-20 flex h-full w-[35%] flex-col flex-wrap rounded-xl border-2 border-zinc-700 bg-[#ffffff72]  p-2 text-center dark:border-[#ffffffdb] dark:bg-zinc-900">
      <input
        type="text"
        className="rounded-xl bg-[#00000020] p-2 text-center text-xl text-black dark:bg-[#ffffff1e] dark:text-white"
        placeholder="Enter search words separated by comma"
      />
      <h3 className="my-3">ALL WORDS COUNT: {length.toLocaleString()}</h3>
    </div>
  )
}

export default memo(index)
