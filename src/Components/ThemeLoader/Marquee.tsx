import React, { memo } from 'react'

const Marquee = () => {
  return (
    <>
      <div className="absolute -bottom-3 animate-pulse overflow-hidden text-9xl  text-zinc-900 dark:text-neutral-100">
        O
      </div>
      <div className="absolute bottom-7 flex w-screen overflow-hidden bg-zinc-900 dark:bg-neutral-100 dark:text-zinc-900 ">
        <div className="neutral-100 space-nowrap animate-marquee pb-2">
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
        </div>

        <div className="neutral-100 space-nowrap absolute top-0  animate-marquee2 pb-2">
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
          <span className="marquee-text">Omphalos</span>
        </div>
      </div>
    </>
  )
}

export default memo(Marquee)
