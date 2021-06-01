import React, { createContext, useEffect, useState } from "react";

export const CounterCartContext = createContext();

export const CounterCartContextProvider = ({ children }) => {
  const [count, setCount] = useState(+window.localStorage.getItem('@countCart') || 0);

  useEffect(() => {
    window.localStorage.setItem('@countCart', count)
  }, [count]);

  return (
    <CounterCartContext.Provider value={[count, setCount]}>
      {children}
    </CounterCartContext.Provider>
  );
};