import React, { ReactNode } from 'react';

// TODO:
// 4. Create register page

export default function Tooltip({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) {
  return (
    <>
      <span className='group relative'>
        <span className="pointer-events-none absolute top-0 left-16 neutral-100space-nowrap rounded-xl bg-zinc-900 dark:bg-neutral-100 dark:text-zinc-900 px-2 py-1 text-neutral-100 opacity-0 transition before:absolute before:top-5 before:right-5 before:border-5 before:border-transparent before:border-r-zinc-900 before:content-[''] group-hover:opacity-100">
          {text}
        </span>

        {children}
      </span>
    </>
  );
}
