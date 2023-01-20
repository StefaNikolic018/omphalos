import React from 'react';

export default function Marquee() {
  return (
    <>
      <div className='text-9xl absolute -bottom-3 dark:text-neutral-100 text-zinc-900  overflow-hidden animate-pulse'>
        O
      </div>
      <div className='flex w-screen overflow-hidden absolute bottom-7 bg-zinc-900 dark:bg-neutral-100 dark:text-zinc-900 '>
        <div className='animate-marquee pb-2 neutral-100space-nowrap'>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
        </div>

        <div className='absolute top-0 animate-marquee2 pb-2  neutral-100space-nowrap'>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
          <span className='marquee-text'>Omphalos</span>
        </div>
      </div>
    </>
  );
}
