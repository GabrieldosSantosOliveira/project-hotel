import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { ActivityIndicator } from 'react-native';

import { Loading } from './src/components/Loading';
import { StatusBar } from './src/components/StatusBar';
import { AuthContextProvider } from './src/context/AuthContext';
import { ThemeProvider } from './src/context/ThemeContext';
import { useTheme } from './src/hooks/useTheme';
import { Routes } from './src/routes';
import { THEME } from './src/styles/theme';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <ThemeProvider>
        <AuthContextProvider>
          <StatusBar
            translucent
            backgroundColor="transparent"
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </AuthContextProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
