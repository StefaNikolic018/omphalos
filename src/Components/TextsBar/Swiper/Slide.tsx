import React from 'react';
import { SwiperSlide } from 'swiper/react';

import { IText } from 'src/interfaces/texts';

export default function Slide({ text }: { text: IText }) {
  return (
    <>
      <div className='h-full w-full flex flex-col'>
        <div className='flex flex-row gap-1 text-sm border-b border-b-zinc-600 truncate mb-1 pb-1'>
          <div className='w-8/12'>{text.name}</div>
          <div className='w-8/12'>
            {new Date(1000 * text.created.seconds).toLocaleString()}
          </div>
        </div>
        <p className='text-left text-xs text-zinc-700 text-body'>
          {/* STRIP OF HTML */}
          {text.body.replace(/(<([^>]+)>)/gi, '')}
        </p>
      </div>
    </>
  );
}
