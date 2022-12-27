import {
  Spinner,
  Center,
  HStack,
  VStack
} from 'native-base';
import { Text } from 'react-native';

import { useTheme } from '../hooks/useTheme';
import Logo from './../assets/Logo.svg';
export const Loading = () => {
  const { colorMode } = useTheme();
  return (
    <VStack
      flex={1}
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
    >
      <Center flex={1}>
        <HStack alignItems="center">
          <Logo />
          <Text
            style={{
              color:
                colorMode === 'dark' ? 'white' : 'black',
              fontSize: 24,
              marginLeft: 10
            }}
          >
            Reasa
          </Text>
        </HStack>
      </Center>
      <Spinner size="lg" marginBottom={10} />
    </VStack>
  );
};
