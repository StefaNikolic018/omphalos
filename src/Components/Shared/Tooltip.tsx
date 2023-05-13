import React, { ReactNode, memo } from 'react'

const Tooltip = ({ children, text }: { children: ReactNode; text: string }) => {
  return (
    <span className="group relative">
      <span className="neutral-100 space-nowrap before:border-5 pointer-events-none absolute left-[65px] top-1 z-20 rounded-3xl bg-zinc-900 px-2 py-1 text-xl text-neutral-100 opacity-0 transition before:absolute before:right-5 before:top-10 before:border-transparent before:border-r-zinc-900 before:content-[''] group-hover:opacity-100 dark:bg-neutral-100 dark:font-bold dark:text-zinc-900">
        {text}
      </span>

      {children}
    </span>
  )
}

export default memo(Tooltip)
