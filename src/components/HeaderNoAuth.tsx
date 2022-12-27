import { useNavigation } from '@react-navigation/native';
import {
  VStack,
  IconButton,
  Icon,
  Button
} from 'native-base';
import { ArrowLeft } from 'phosphor-react-native';

import { useTheme } from '../hooks/useTheme';

export const HeaderNoAuth = () => {
  const { canGoBack, goBack } = useNavigation();
  const { colorMode } = useTheme();
  console.log('COLORMODE ==========>', colorMode);
  console.log(canGoBack() ? 'flex' : 'none');

  return (
    <VStack
      width="full"
      height="12"
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      alignItems="flex-start"
      justifyContent="center"
    >
      <IconButton
        icon={
          <Icon
            as={
              <ArrowLeft
                size={30}
                color={
                  colorMode === 'dark' ? 'white' : '#000'
                }
              />
            }
          />
        }
        onPress={goBack}
      />
    </VStack>
  );
};
