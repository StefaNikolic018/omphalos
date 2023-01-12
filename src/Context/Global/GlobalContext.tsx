import React, {
  createContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ReactNode,
} from 'react';
import { useLocation } from 'react-router-dom';

import useToast from '../../hooks/useToast';
import { storageInsert, storageSelect } from '../../utils/storage';

type GlobalContextType = {
  isInit: boolean;
  setIsInit: Dispatch<SetStateAction<boolean>>;
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<GlobalContextType>({
  isInit: false,
  setIsInit: () => { },
  dark: true,
  setDark: () => { },
});

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const location = useLocation();
  const notify = useToast();

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
      // console.log(storageSelect('mode'))
      setDark(storageSelect('mode') === 'dark');
      setIsInit(true);
    }
  }, []);

  useEffect(() => {
    const body = window.document.body.classList;
    dark ? body.add('dark') : body.remove('dark');
    if (storageSelect('mode')) {
      storageInsert('mode', dark ? 'dark' : 'white')
    }
  }, [dark]);

  useEffect(() => {
    if (location?.state?.message) {
      notify(location.state.message, true)
    }
  }, [location.state])

  return (
    <GlobalContext.Provider value={{ dark, setDark, isInit, setIsInit }}>
      {children}
    </GlobalContext.Provider>
  );
}
