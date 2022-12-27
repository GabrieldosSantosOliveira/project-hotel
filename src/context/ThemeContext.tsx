import {
  useColorMode,
  IColorModeContextProps
} from 'native-base';
import {
  createContext,
  useEffect,
  ReactNode,
  FC
} from 'react';
import { useColorScheme } from 'react-native';

import { getStorage } from '../services/getStorage';
import { setStorage } from '../services/setStorage';
type IThemeContext = IColorModeContextProps;
export const ThemeContext = createContext(
  {} as IThemeContext
);
interface IThemeProvider {
  children: ReactNode;
}
export const ThemeProvider: FC<IThemeProvider> = ({
  children
}) => {
  const { colorMode, setColorMode, ...rest } =
    useColorMode();
  const colorScheme = useColorScheme();
  useEffect(() => {
    async function loadingThemeInStorage() {
      const theme = await getStorage<'dark' | 'light'>(
        '@theme'
      );
      if (theme) {
        console.log(theme);
        setColorMode(theme);
      } else {
        setColorMode(colorScheme ?? 'light');
      }
    }
    loadingThemeInStorage();
  }, []);
  useEffect(() => {
    setStorage('@theme', colorMode);
  }, [colorMode]);
  return (
    <ThemeContext.Provider
      value={{ colorMode, setColorMode, ...rest }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
