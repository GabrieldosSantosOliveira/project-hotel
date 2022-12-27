import { yupResolver } from '@hookform/resolvers/yup';
import {
  Text,
  VStack,
  Icon,
  Pressable,
  Heading,
  Checkbox,
  HStack,
  ScrollView,
  useToast
} from 'native-base';
import {
  Envelope,
  Lock,
  Eye,
  EyeSlash
} from 'phosphor-react-native';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { ButtonPrimary } from '../components/Button/ButtonPrimary';
import { ButtonSecondary } from '../components/Button/ButtonSecondary';
import { ErrorMessage } from '../components/ErrorMessage';
import { HeaderNoAuth } from '../components/HeaderNoAuth';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { api } from '../services/api';
import Google from './../assets/Google.svg';
import Logo from './../assets/Logo.svg';
import { Input } from './../components/Input';
import { schema } from './../Validation/RegisterUser';
interface IForm {
  password: string;
  email: string;
  remember?: boolean;
}
export const Register = () => {
  const toast = useToast();
  const { SingUpWithGoogle } = useAuth();
  const { colorMode, toggleColorMode } = useTheme();
  const [isLoading, setIsLoading] =
    useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IForm>({
    resolver: yupResolver(schema)
  });
  console.log('ERROR ===>', errors);
  async function handleCreateUser({
    email,
    password,
    remember = false
  }: IForm) {
    try {
      setIsLoading(true);
      toast.show({
        title: 'Sucesso'
      });
      const { data } = await api.post(
        '/createUserWithGoogleProvider'
      );

      console.log(data);
    } catch (error) {
      console.log(error);
      toast.show({
        title: 'Sucesso'
      });
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <VStack
      flex={1}
      safeArea
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      alignItems="center"
    >
      <HeaderNoAuth />
      <ScrollView
        flex={1}
        w="full"
        showsVerticalScrollIndicator={false}
      >
        <VStack
          flex={1}
          safeArea
          alignItems="center"
          px={5}
        >
          <Logo width={150} height={150} />
          <Heading my={6} size="2xl">
            Crie sua conta
          </Heading>
          <Controller
            name="email"
            control={control}
            render={({
              field: { onChange, onBlur, value },
              fieldState,
              formState
            }) => (
              <>
                <Input
                  my={3}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Email"
                  type="text"
                  InputLeftElement={
                    <Icon
                      as={
                        <Envelope
                          color={
                            colorMode === 'dark'
                              ? 'white'
                              : 'black'
                          }
                        />
                      }
                    />
                  }
                  autoComplete="email"
                />
                <ErrorMessage>
                  {errors.email?.message}
                </ErrorMessage>
              </>
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({
              field: { onBlur, onChange, value }
            }) => (
              <>
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  my={3}
                  placeholder="Senha"
                  type={!showPassword ? 'password' : 'text'}
                  InputLeftElement={
                    <Icon
                      as={
                        <Lock
                          color={
                            colorMode === 'dark'
                              ? 'white'
                              : 'black'
                          }
                        />
                      }
                    />
                  }
                  autoComplete="password-new"
                  InputRightElement={
                    <Pressable
                      onPress={() =>
                        setShowPassword(prev => !prev)
                      }
                    >
                      <Icon
                        as={
                          showPassword ? (
                            <Eye
                              color={
                                colorMode === 'dark'
                                  ? 'white'
                                  : 'black'
                              }
                            />
                          ) : (
                            <EyeSlash
                              color={
                                colorMode === 'dark'
                                  ? 'white'
                                  : 'black'
                              }
                            />
                          )
                        }
                      />
                    </Pressable>
                  }
                />
                <ErrorMessage>
                  {errors?.password?.message}
                </ErrorMessage>
              </>
            )}
          />
          <Controller
            name="remember"
            control={control}
            render={({ field: { onChange } }) => (
              <Checkbox
                onChange={onChange}
                my={2}
                value="jjj"
              >
                Relembre-de mim por 10 dias
              </Checkbox>
            )}
          />
          <ButtonPrimary
            my={4}
            onPress={handleSubmit(handleCreateUser)}
            isLoading={isLoading}
          >
            Cadastrar
          </ButtonPrimary>
          <HStack
            mx={4}
            justifyContent="center"
            alignItems="center"
            my={4}
          >
            <Text bg="light.100" flex="1" h="0.5"></Text>
            <Text fontSize="md">ou continue com</Text>
            <Text bg="light.100" flex="1" h="0.5"></Text>
          </HStack>
          <HStack
            alignItems="center"
            my={4}
            justifyContent="center"
          >
            <ButtonSecondary w="16">
              <Google
                width={35}
                height={35}
                onPress={toggleColorMode}
              />
            </ButtonSecondary>
          </HStack>
          <Text my={4}>
            Já possui uma conta?
            <Text color="blue.600">{'  '}Loge-se</Text>
          </Text>
        </VStack>
      </ScrollView>
    </VStack>
  );
};
