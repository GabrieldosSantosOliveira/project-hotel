import { useNavigation } from '@react-navigation/native';
import {
  VStack,
  Icon,
  Text,
  HStack,
  Image,
  Heading,
  Link
} from 'native-base';
import { GoogleLogo } from 'phosphor-react-native';
import { useState } from 'react';

import { ButtonPrimary } from '../components/Button/ButtonPrimary';
import { HeaderNoAuth } from '../components/HeaderNoAuth';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import Apple from './../assets/Apple.svg';
import Facebook from './../assets/Facebook.svg';
import Google from './../assets/Google.svg';
import Meditation from './../assets/Meditacao.png';
import { ButtonSecondary } from './../components/Button/ButtonSecondary';

export function Auth() {
  const [appleAuthentication, setAppleAuthentication] =
    useState(true);

  const { colorMode } = useTheme();
  const { SingUpWithGoogle, isUserLoading } = useAuth();
  const { navigate } = useNavigation();

  return (
    <VStack
      flex={1}
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      safeArea
      alignItems="center"
    >
      <HeaderNoAuth />
      <Image source={Meditation} alt="Icone" size={300} />
      <VStack flex={1} w="full" px="5" mt={6}>
        <Heading textAlign="center" py={5}>
          Inicie sua nova Jornada
        </Heading>
        <ButtonSecondary
          my={2}
          onPress={SingUpWithGoogle}
          leftIcon={<Icon as={Google} size="xl" />}
          isLoading={isUserLoading}
        >
          <Text color="black" fontSize="md">
            Entrar com o Google
          </Text>
        </ButtonSecondary>

        <HStack
          justifyContent="center"
          alignItems="center"
          my={4}
        >
          <Text bg="light.100" flex="1" h="0.5"></Text>
          <Text fontSize="md">ou</Text>
          <Text bg="light.100" flex="1" h="0.5"></Text>
        </HStack>
        <ButtonPrimary onPress={() => navigate('register')}>
          Entre com email e senha
        </ButtonPrimary>
        <Text fontSize="md" mt="5" textAlign="center">
          Não tem conta?
          <Text color="blue.600">Cadastre-se</Text>
        </Text>
      </VStack>
    </VStack>
  );
}
