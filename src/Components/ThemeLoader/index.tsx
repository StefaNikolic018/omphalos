import React, { useCallback, memo } from 'react'
import Snowfall from 'react-snowfall'

import Marquee from './Marquee'

import { storageInsert } from '../../utils/storage'

import logo from '../../assets/omphalos-logo-custom.png'
import useGlobalContext from '../../Context/Global/useGlobalContext'

const index = () => {
  const { dark, setDark, setIsInit } = useGlobalContext()

  const closeIntro = useCallback(() => {
    storageInsert('mode', dark ? 'dark' : 'neutral-100')
    setIsInit(true)
  }, [dark])

  return (
    <div className="flex h-screen w-screen flex-col items-center overflow-hidden bg-neutral-100 pt-5 dark:bg-zinc-900 ">
      <h1 className="animate-pulse text-3xl text-zinc-900 dark:text-neutral-100">
        Select your color mode by clicking on the logo:
      </h1>
      <Snowfall color="orange" style={{ width: '100vw' }} />
      <img
        className="mt-40 h-3/6 w-4/6 animate-bounce-slow cursor-pointer drop-shadow-xl invert-0 saturate-100 transition-all duration-500 hover:opacity-60 dark:invert dark:saturate-0"
        src={logo}
        alt="Omphalos"
        onClick={() => setDark((prev) => !prev)}
      />
      <button
        className="duration-250 mt-5 rounded-2xl border-4 border-orange-600 bg-zinc-900 py-1 px-4 text-neutral-100 transition-all hover:mt-2 hover:py-2 hover:px-5 hover:opacity-90 dark:bg-neutral-100 dark:text-zinc-900 hover:dark:bg-gray-200"
        onClick={closeIntro}
      >
        CONTINUE
      </button>
      <Marquee />
    </div>
  )
}

export default memo(index)
