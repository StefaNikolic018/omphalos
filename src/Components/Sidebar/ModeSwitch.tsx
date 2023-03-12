import React, { memo } from 'react'
import useGlobalContext from '../../Context/Global/useGlobalContext'

const ModeSwitch = () => {
  const { dark, setDark } = useGlobalContext()
  return (
    <input
      type="checkbox"
      className="h-8 w-14 cursor-pointer appearance-none rounded-full border-2 border-zinc-900 bg-gray-300 py-0.5 shadow-inner transition-all duration-300 before:ml-0.5 before:inline-block before:h-6 before:w-6 before:rounded-full before:bg-orange-500 before:transition-all before:duration-300 checked:border-orange-400 checked:bg-zinc-900 checked:before:translate-x-full checked:before:bg-neutral-100 hover:before:opacity-60 focus:outline-none"
      checked={dark}
      onChange={() => setDark((prev) => !prev)}
    />
  )
}

export default memo(ModeSwitch)
