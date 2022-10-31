import React, {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ReactNode,
} from 'react';

type GlobalContextType = {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  dark: true,
  setDark: () => {},
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // REFACTOR THIS CODE INTO SOME CUSTOM HOOK
  const [dark, setDark] = useState(
    localStorage.getItem('mode')
      ? localStorage.getItem('mode') === 'dark'
        ? true
        : false
      : true
  );

  useEffect(() => {
    if (localStorage.getItem('mode') !== null) {
      setDark(localStorage.getItem('mode') === 'dark');
    }
  }, [localStorage.getItem('mode')]);

  useEffect(() => {
    const body = window.document.body.classList;
    dark ? body.add('dark') : body.remove('dark');
  }, [dark]);

  return (
    <GlobalContext.Provider value={{ dark, setDark }}>
      {children}
    </GlobalContext.Provider>
  );
}
