import { useState, useEffect } from 'react';
type ReturnTheme = ['light' | 'dark', () => void];
export const useTheme = (
  initialValue: 'light' | 'dark',
  key: string
): ReturnTheme => {
  const [theme, setTheme] = useState(initialValue);
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return [theme, toggleTheme];
};
