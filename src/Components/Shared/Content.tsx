import React from 'react';

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative dark:bg-zinc-900 w-screen overflow-x-hidden min-h-screen'>
      {children}
    </div>
  );
}
