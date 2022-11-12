import React, { useState } from 'react'
import Editor from '../Components/Editor'
import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

export default function Dashboard() {
  // TODO: 
  // 0. FIX INTERACTION BETWEEN SELECET TEXTS IN EDITOR AND SIDEBAR
  // 1. Add select text feature
  // 2. Add text to editor on select
  // 3. Add new text feature
  // 4. Change fields based on editors functions
  // 5. Handle texts/sidebar scroll and mobile version
  // 6. Handle text ids with some package
  // 7. Refactor code and types
  const { user, texts } = useFirebaseContext();
  console.log(user)
  console.log(texts)
  const [selectedText, setSelectedText] = useState<string | boolean>(false);
  return (
    <div className='flex flex-row justify-around items-center h-full'>
      <div className="w-8/12 h-[80%] z-20">
        <Editor text={texts.find((text: any) => text.id === selectedText)?.body} />
      </div>
      <div className="w-3/12 h-[80%] z-20 p-2 border-2 border-white rounded-xl bg-[#ffffff72] flex flex-col flex-wrap">
        {texts.map((text: any) =>
          <div key={text.name} className={`w-[45%] h-[15%] p-2 border bg-[#a7a7a78d] flex flex-col justify-start items-between rounded-xl cursor-pointer shadow-lg transition-all duration-200 hover:scale-105 ${selectedText === text.id ? 'border-orange-500' : ' border-white'}`} onClick={() => setSelectedText(text.id)}>
            <h1 className='font-bold text-sm'>{text.name}</h1>
            <hr />
            <p className='opacity-80 text-xs whitespace-pre-wrap truncate'>{text.body}</p>
            {/* <p className='self-end'>{text.last_edited}</p> */}
          </div>)}
      </div>
    </div>
  )
}
