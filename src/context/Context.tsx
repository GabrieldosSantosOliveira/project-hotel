import { createContext, ReactNode } from 'react';

import { useTheme } from './../hook/useTheme';
type ContextType = {
  toggleTheme: () => void;
  theme: 'light' | 'dark';
};
export const Context = createContext({} as ContextType);
type ContextProviderType = {
  children: ReactNode;
};
export const ContextProvider = ({
  children
}: ContextProviderType) => {
  const [theme, toggleTheme] = useTheme('dark', 'theme');
  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      {children}
    </Context.Provider>
  );
};
