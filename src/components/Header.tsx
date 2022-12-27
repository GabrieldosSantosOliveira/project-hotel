import { useNavigation } from '@react-navigation/native';
import {
  HStack,
  IconButton,
  Icon,
  Button
} from 'native-base';
import { CaretLeft, SignOut } from 'phosphor-react-native';

import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
  const { goBack, canGoBack } = useNavigation();
  const { setUser } = useAuth();
  console.log(canGoBack);
  const { colorMode, toggleColorMode } = useTheme();
  console.log(canGoBack() ? 'flex' : 'none');
  return (
    <HStack
      width="full"
      height="24"
      alignItems="center"
      bg={colorMode === 'dark' ? 'gray.800' : 'light.300'}
      safeArea
    >
      <IconButton
        icon={
          <Icon
            as={
              <CaretLeft
                size={30}
                weight="bold"
                color={
                  colorMode === 'dark' ? 'white' : 'black'
                }
              />
            }
          />
        }
        onPress={goBack}
        display={canGoBack() ? 'flex' : 'none'}
      />
      <IconButton
        onPress={() => toggleColorMode()}
        icon={
          <Icon
            as={
              <SignOut
                size={30}
                weight="bold"
                color={
                  colorMode === 'dark' ? 'white' : 'black'
                }
              />
            }
          />
        }
      />
    </HStack>
  );
};
