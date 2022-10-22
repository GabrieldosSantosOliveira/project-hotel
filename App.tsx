import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';

import { Routes } from './src/routes';
import { Loading } from './src/screens/Loading';
import { THEME } from './src/styles/theme';
export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });
  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
