import React, { memo } from 'react'

import { IText } from 'src/interfaces/texts'
import { formatText } from '../../../utils/formatText'

const Slide = ({ text }: { text: IText }) => {
  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="mb-1 flex flex-row gap-1 truncate border-b border-b-zinc-600 pb-1 text-sm">
          <div className="w-8/12">{text.name}</div>
          <div className="w-8/12">
            {new Date(1000 * text.created.seconds).toLocaleString()}
          </div>
        </div>
        <p className="text-body text-left text-xs text-zinc-700">
          {/* STRIP OF HTML */}
          {formatText(text.body)}
        </p>
      </div>
    </>
  )
}
export default memo(Slide)
