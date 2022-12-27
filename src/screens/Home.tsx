import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { useTheme } from '../hooks/useTheme';

export const Home = () => {
  const { colorMode } = useTheme();
  return (
    <VStack
      flex={1}
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
    >
      <Header />
    </VStack>
  );
};
