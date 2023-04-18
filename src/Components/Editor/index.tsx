import React, { useRef, useCallback, memo, useEffect, useState } from 'react'
import ReactQuill from 'react-quill'

import { CurrentTextT } from 'src/interfaces/texts'

import useAuth from '../../Context/Firebase/useAuth'

import 'react-quill/dist/quill.snow.css'
import '../../css/quill.css'

const index = ({ text }: { text: CurrentTextT }) => {
  // TODO:
  // 1. Create logic for adding new text ✔
  // 2. Create input for title of the text ✔
  // 3. Install react hook form ✔
  // 4. and add validation to texts(problem with registering quill) ✔
  // 5. because of the problem with quill, need to implement own custom validation ✔
  // 6. Need to put texts bar to the top and add word search functionality on the right side!!!!

  const { user, addNewText } = useAuth()

  const [isValid, setIsValid] = useState(true)

  // References for input fields
  const nameRef = useRef<HTMLInputElement>(null)
  const bodyRef = useRef<any>(null)

  const submitText = useCallback(() => {
    if (nameRef.current?.value && bodyRef.current?.value) {
      setIsValid(true)
      addNewText(nameRef.current?.value!, bodyRef.current.value, user.uid)
    } else {
      setIsValid(false)
    }
  }, [nameRef.current?.value, bodyRef.current?.value, user.uid])

  // If user starts with the new text
  useEffect(() => {
    if (!text.name) {
      nameRef.current?.focus()
    }
  }, [text.name])

  return (
    <div className="relative z-10 h-full w-[65%]">
      <input
        id="text-name"
        type="text"
        defaultValue={text.name}
        placeholder="Name your story"
        className="absolute top-0 w-full rounded-t-xl bg-[#00000020] px-3 py-1 text-center text-lg font-bold uppercase text-black focus-visible:outline-0 dark:bg-[#ffffff1e] dark:text-white"
        ref={nameRef}
        autoFocus
      />
      <button
        className={`absolute right-[0.2%] top-9 py-2 px-3 text-zinc-800 ${
          // isValid ?
          'cursor-pointer bg-orange-500 hover:bg-orange-400'
          // : 'bg-orange-400'
        }`}
        onClick={submitText}
        // disabled={!isValid}
      >
        SUBMIT
      </button>
      <ReactQuill
        id="text-body"
        className="h-full w-full  rounded-xl border-2  border-zinc-700 bg-[#ffffffdb] pt-8 text-black dark:border-[#ffffffdb] dark:bg-zinc-900 dark:text-white"
        placeholder="Enter your story here"
        theme="snow"
        value={text.body ? text.body : bodyRef.current?.value}
        ref={bodyRef}
      />
      {!isValid && (
        <div className="absolute bottom-2 mt-2 w-full animate-pulse text-center text-xl font-bold text-orange-800">
          Please tell us your story properly!
        </div>
      )}
    </div>
  )
}

export default memo(index)
