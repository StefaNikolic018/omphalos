import React, { useRef, useState, useMemo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './swiperStyles.css';

// import required modules
import { Grid, Pagination } from 'swiper';
import Slide from './Slide';

import { IText } from 'src/interfaces/texts';

export default function index({
  texts,
  selectedTextID,
  setSelectedText,
}: {
  texts: IText[];
  selectedTextID: string | undefined;
  setSelectedText: React.Dispatch<React.SetStateAction<any>>;
}) {
  const renderTexts = useMemo(
    () =>
      texts.map((text: IText) => (
        <SwiperSlide
          key={text.id}
          className={`rounded-xl opacity-80 cursor-pointer hover:scale-[101%] shadow-sm transition-all hover:opacity-90 border border-zinc-500 dark:border-0 flex flex-row gap-2 p-2 justify-center text-black h-full ${
            selectedTextID === text.id
              ? 'border-orange-500'
              : ' border-white dark:border-zinc-700'
          }`}
          onClick={() =>
            setSelectedText({
              body: text.body,
              name: text.name,
              id: text.id,
            })
          }
        >
          <Slide text={text} />
        </SwiperSlide>
      )),
    [setSelectedText, selectedTextID, texts]
  );

  return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
        }}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className='mySwiper h-full'
      >
        {renderTexts}
      </Swiper>
    </>
  );
}
