import { useNavigation } from '@react-navigation/native';
import { VStack, Text, Image, Heading } from 'native-base';

import { ButtonPrimary } from '../components/Button/ButtonPrimary';
import { useTheme } from '../hooks/useTheme';
import Welcome from './../assets/Welcome.png';
export const HomePage = () => {
  const { colorMode } = useTheme();
  const { navigate } = useNavigation();
  return (
    <VStack
      flex={1}
      safeArea
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      py={12}
    >
      <Image
        source={Welcome}
        width="full"
        alt="Vários destinos ao redor do mundo"
      />
      <VStack
        py={5}
        px={5}
        flex={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading color="blue.600" size="xl" lineHeight="lg">
          Bem-vindo a Reasa 👋
        </Heading>
        <Text fontSize="xl" textAlign="center">
          O melhor aplicativo imobiliário para completar sua
          vida e família
        </Text>
        <ButtonPrimary onPress={() => navigate('welcome')}>
          Proximo
        </ButtonPrimary>
      </VStack>
    </VStack>
  );
};
