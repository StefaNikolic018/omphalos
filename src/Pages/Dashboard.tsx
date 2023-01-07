import React, { useState } from 'react'
import Editor from '../Components/Editor'
import TextsBar from '../Components/TextsBar'
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
  const { user, texts } = useFirebaseContext();
  const [selectedText, setSelectedText] = useState<string | boolean>(false);
  return (
    <div className='flex flex-row justify-around items-center h-full'>
      <Editor text={texts.find((text: any) => text.id === selectedText)?.body} />
      <TextsBar texts={texts} selectedText={selectedText} setSelectedText={setSelectedText} />
    </div>
  )
}
