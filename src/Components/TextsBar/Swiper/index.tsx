import React, { memo, useMemo, useCallback } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// TODO: Fix click on removing a text and it shows that text in the editor
// maybe also change of the main section width on adding a new text

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'

import './swiperStyles.css'

// import required modules
import { Grid, Pagination } from 'swiper'
import Slide from './Slide'

import { IText } from 'src/interfaces/texts'
import useDb from '../../../Context/Firebase/useDb'

const index = ({
  texts,
  selectedTextID,
  setSelectedText
}: {
  texts: IText[]
  selectedTextID: string | undefined
  setSelectedText: React.Dispatch<React.SetStateAction<any>>
}) => {
  const { removeText } = useDb()
  const deleteText = useCallback((id: string) => {
    removeText(id)
  }, [])

  const renderTexts = useMemo(
    () =>
      texts.map((text: IText) => (
        <SwiperSlide
          key={text.id}
          className={`group relative z-10 flex h-full cursor-pointer flex-row justify-center gap-2 rounded-3xl border border-zinc-500 p-2 text-black opacity-90 shadow-sm transition-all hover:scale-[101%] hover:opacity-100 dark:border-0 ${
            selectedTextID === text.id
              ? 'border-orange-500'
              : ' border-white dark:border-zinc-700'
          }`}
          onClick={() =>
            setSelectedText({
              body: text.body,
              name: text.name,
              id: text.id
            })
          }
        >
          <Slide
            name={text.name}
            body={text.body}
            created={text.created.seconds}
          />
          <button
            className="absolute right-3 top-1.5 z-20 hidden text-red-400 hover:text-red-600 group-hover:block"
            onClick={() => deleteText(text.id)}
          >
            X
          </button>
        </SwiperSlide>
      )),
    [setSelectedText, selectedTextID, texts]
  )

  return (
    <Swiper
      slidesPerView={3}
      grid={{
        rows: 1
      }}
      spaceBetween={5}
      pagination={{
        clickable: true
      }}
      modules={[Grid, Pagination]}
      className="mySwiper h-full"
    >
      {renderTexts}
    </Swiper>
  )
}

export default memo(index)
