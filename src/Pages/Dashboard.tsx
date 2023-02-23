import React, { useState, useMemo } from 'react';

import { IText, CurrentTextT } from 'src/interfaces/texts';

import Editor from '../Components/Editor';
import ActionBar from '../Components/ActionBar';
import TextsBar from '../Components/TextsBar';
import useFirebaseContext from '../Context/Firebase/useFirebaseContext';

export default function Dashboard() {
  // TODO:
  // 0. FIX INTERACTION BETWEEN SELECT TEXTS IN EDITOR AND SIDEBAR ✔
  // 1. Add select text feature ✔ NEED TO REFACTOR IT AND CHANGE LOGIC BEHIND IT
  // 2. Add text to editor on select ✔
  // 3. Add new text feature ✔
  // 4. Change fields based on editors functions
  // 5. Handle texts/sidebar scroll and mobile version
  // 6. Handle text ids with some package ✔
  // 7. Refactor code and types
  // 8. Add useTransition hook
  // 9. Add vscode shortcuts like ctrl+shift+k, ctrl+d etc.
  // 10. Change favicon ✔ but needs to be redone ✔
  // 11. Look how the editor saves formatted text and show it formatted - on change is adding html tags, so we save it like that
  // 12. Memoize the components for future use with React.memo ✔
  // 13. Rewrite all of Tailwind inline classes to utility classes in css file ✔
  // 14. Refactor Contexts, separate them, we need to be able to use useDb everywhere instead just in firebase context!!!

  const { texts } = useFirebaseContext();
  const [selectedText, setSelectedText] = useState<CurrentTextT>({
    body: undefined,
    name: undefined,
    id: undefined,
  });

  return (
    <div className='dashboard-content'>
      <TextsBar
        texts={texts as IText[]}
        selectedTextID={selectedText.id}
        setSelectedText={setSelectedText}
      />
      <div className='flex flex-row h-full w-full gap-5 my-3'>
        <Editor text={selectedText} />
        <ActionBar />
      </div>
    </div>
  );
}
