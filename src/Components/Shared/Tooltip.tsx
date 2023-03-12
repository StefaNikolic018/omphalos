import React, { ReactNode, memo } from 'react'

const Tooltip = ({ children, text }: { children: ReactNode; text: string }) => {
  return (
    <span className="group relative">
      <span className="neutral-100 space-nowrap before:border-5 pointer-events-none absolute top-1 left-[65px] z-20 rounded-xl bg-zinc-900 px-2 py-1 text-xl text-neutral-100 opacity-0 transition before:absolute before:top-10 before:right-5 before:border-transparent before:border-r-zinc-900 before:content-[''] group-hover:opacity-100 dark:bg-neutral-100 dark:font-bold dark:text-zinc-900">
        {text}
      </span>

      {children}
    </span>
  )
}

export default memo(Tooltip)
