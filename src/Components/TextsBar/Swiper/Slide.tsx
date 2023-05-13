import React, { memo } from 'react'

// import { IText } from 'src/interfaces/texts'
import { formatText } from '../../../utils/formatText'

type propsT = {
  name: string
  body: string
  created: number
}

// const Slide = ({ text }: { text: IText }) => {
const Slide = (props: propsT) => {
  const { name, body, created } = props

  return (
    <>
      <div className="flex h-full w-full flex-col">
        <div className="mb-1 flex flex-row gap-1 truncate border-b border-b-zinc-600 pb-1 text-sm">
          <div className="w-8/12">{name}</div>
          <div className="w-8/12">
            {new Date(1000 * created).toLocaleString()}
          </div>
        </div>
        <p className="text-body text-left text-xs text-zinc-700">
          {/* STRIP OF HTML */}
          {formatText(body)}
        </p>
      </div>
    </>
  )
}
export default memo(Slide)
