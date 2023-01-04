import React, { useState } from 'react'
import Editor from '../Components/Editor'
import useFirebaseContext from '../Context/Firebase/useFirebaseContext'

export default function Dashboard() {
  // TODO: 
  // 0. FIX INTERACTION BETWEEN SELECT TEXTS IN EDITOR AND SIDEBAR
  // 1. Add select text feature ✔
  // 2. Add text to editor on select
  // 3. Add new text feature
  // 4. Change fields based on editors functions
  // 5. Handle texts/sidebar scroll and mobile version
  // 6. Handle text ids with some package
  // 7. Refactor code and types
  // 8. Add useTransition hook
  // 9. Add vscode shortcuts like ctrl+shift+k, ctrl+d etc.
  // 10. Change favicon ✔ but needs to be redone
  // 11. Look how the editor saves formatted text and show it formatted - on change is adding html tags, so we save it like that
  // FIRST THING WE NEED TO CREATE COMPONENT OUT OF RIGHT BAR WITH TEXTS AND CREATE WHOLE LOGIC BEHIND SELECTING TEXTS
  const { user, texts } = useFirebaseContext();
  const [selectedText, setSelectedText] = useState<string | boolean>(false);
  return (
    <div className='flex flex-row justify-around items-center h-full'>
      <div className="w-7/12 h-[80%] z-10">
        <Editor text={texts.find((text: any) => text.id === selectedText)?.body} />
      </div>
      <div className="w-4/12 h-[80%] z-20 p-2 border-2 dark:border-[#ffffffdb] border-zinc-700 rounded-xl bg-[#ffffff72] dark:bg-zinc-900  flex flex-col flex-wrap">
        {texts.map((text: any) =>
          <div key={text.name} className={`w-[45%] h-[15%] p-2 border bg-[#ffffff8d] dark:bg-zinc-800  text-black dark:text-white flex flex-col justify-start items-between rounded-xl cursor-pointer shadow-lg transition-all duration-200 hover:scale-105 ${selectedText === text.id ? 'border-orange-500' : ' border-white dark:border-zinc-700'}`} onClick={() => setSelectedText(text.id)}>
            <h1 className='font-bold text-sm'>{text.name}</h1>
            <hr />
            <p className='opacity-80 text-xs whitespace-pre-wrap truncate'>{text.body}</p>
            {/* <p className='self-end'>{text.last_edited}</p> */}
          </div>)}
      </div>
    </div>
  )
}
