import { useNavigation } from '@react-navigation/native';
import {
  VStack,
  Image,
  FlatList,
  Heading,
  HStack,
  View
} from 'native-base';
import { useRef, useState } from 'react';
import { useWindowDimensions } from 'react-native';

import { ButtonPrimary } from '../components/Button/ButtonPrimary';
import { useTheme } from '../hooks/useTheme';
import Building from './../assets/Building.jpg';
import House from './../assets/House.jpg';
import Pool from './../assets/Pool.jpg';
interface ISlider {
  image: unknown;
  altImage: string;
  title: string;
  onPress: () => void;
  buttonText: string;
  lenthAllSlider: number;
  id: number;
  current: number;
}
const Slider = ({
  altImage,
  image,
  title,
  onPress,
  buttonText,
  lenthAllSlider,
  current
}: ISlider) => {
  const { width } = useWindowDimensions();
  const { colorMode } = useTheme();
  return (
    <VStack
      safeArea
      alignItems="center"
      bg={colorMode === 'dark' ? 'gray.900' : 'white'}
      width={width}
      flex={1}
      pt={20}
      px={5}
    >
      <Image
        size={350}
        source={image}
        alt={altImage}
        roundedTop="full"
        roundedBottomLeft="full"
      />
      <VStack
        w="full"
        flex={1}
        justifyContent="space-between"
        alignItems="center"
        py={12}
      >
        <Heading
          color="blue.600"
          px={5}
          size="xl"
          textAlign="center"
        >
          {title}
        </Heading>
        <HStack
          w="full"
          h="16"
          alignItems="flex-start"
          justifyContent="center"
        >
          {Array(lenthAllSlider)
            .fill('')
            .map((value, index) => {
              {
                return index === current ? (
                  <View
                    key={index}
                    rounded="full"
                    bg="blue.700"
                    w="10"
                    h="3"
                    ml={5}
                  ></View>
                ) : (
                  <View
                    key={index}
                    rounded="full"
                    bg="gray.200"
                    w="3"
                    h="3"
                    ml={5}
                  ></View>
                );
              }
            })}
        </HStack>
        <ButtonPrimary onPress={onPress} size="lg">
          {buttonText}
        </ButtonPrimary>
      </VStack>
    </VStack>
  );
};

export const Welcome = () => {
  const [currentSlideIndex, setCurrentSlideIndex] =
    useState(0);
  const navigate = useNavigation();
  function handleGetStarted() {
    navigate.navigate('auth');
  }
  const sliderRef = useRef(null);
  function handleNextSlide() {
    if (currentSlideIndex < data.length - 1) {
      sliderRef.current?.scrollToIndex({
        index: currentSlideIndex + 1
      });
      setCurrentSlideIndex(prev => prev + 1);
    }
  }
  const data = [
    {
      id: 1,
      altImage: 'Prédio',
      image: Building,
      title:
        'Milhares dos melhores imóveis a preços acessíveis',
      onPress: handleNextSlide,
      buttonText: 'Próximo'
    },
    {
      id: 2,
      altImage: 'Casa',
      image: House,
      title:
        'Reserve um imóvel de forma rápida e fácil com um clique',
      onPress: handleNextSlide,
      buttonText: 'Próximo'
    },
    {
      id: 3,
      altImage: 'Piscina',
      image: Pool,
      title:
        'Vamos encontrar o imóvel que combina com você agora',
      onPress: handleGetStarted,
      buttonText: 'Iniciar'
    }
  ];
  return (
    <FlatList
      ref={sliderRef}
      data={data}
      horizontal
      pagingEnabled
      flex={1}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => (
        <Slider
          altImage={item.altImage}
          image={item.image}
          title={item.title}
          onPress={item.onPress}
          buttonText={item.buttonText}
          lenthAllSlider={data.length}
          id={item.id}
          current={currentSlideIndex}
        />
      )}
    />
  );
};
