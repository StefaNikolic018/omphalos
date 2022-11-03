import React, {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ReactNode,
} from 'react';
import { storageSelect } from '../../utils/storage';

type GlobalContextType = {
  isInit: boolean;
  setIsInit: Dispatch<SetStateAction<boolean>>;
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  isInit: false,
  setIsInit: () => {},
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
    storageSelect('mode')
      ? storageSelect('mode') === 'dark'
        ? true
        : false
      : true
  );

  const [isInit, setIsInit] = useState(!!storageSelect('mode'));

  useEffect(() => {
    if (storageSelect('mode') !== null) {
      setDark(storageSelect('mode') === 'dark');
      setIsInit(true);
    }
  }, []);

  useEffect(() => {
    const body = window.document.body.classList;
    dark ? body.add('dark') : body.remove('dark');
  }, [dark]);

  return (
    <GlobalContext.Provider value={{ dark, setDark, isInit, setIsInit }}>
      {children}
    </GlobalContext.Provider>
  );
}
