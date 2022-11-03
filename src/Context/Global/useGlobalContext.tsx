import React, { useContext } from 'react';

import { GlobalContext } from './GlobalContext';

export default function useGlobalContext() {
  // {dark, setDark}
  const global = useContext(GlobalContext);
  return { ...global };
}
