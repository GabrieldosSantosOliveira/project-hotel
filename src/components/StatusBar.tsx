import { StatusBar as NativeBaseStatusBar } from 'native-base';
import { FC } from 'react';
import { StatusBarProps } from 'react-native';

import { useTheme } from '../hooks/useTheme';
export const StatusBar: FC<StatusBarProps> = ({
  ...props
}) => {
  const { colorMode } = useTheme();
  return (
    <NativeBaseStatusBar
      barStyle={
        colorMode === 'dark'
          ? 'light-content'
          : 'dark-content'
      }
      {...props}
    />
  );
};
