import {
  Text as NativeBaseText,
  ITextProps
} from 'native-base';
import React from 'react';
interface IText extends ITextProps {
  children: React.ReactNode;
}
export const ErrorMessage: React.FC<IText> = ({
  children,
  ...props
}) => {
  return (
    <NativeBaseText
      display={!children ? 'none' : 'flex'}
      alignSelf="flex-start"
      color="red.600"
      {...props}
    >
      {children}
    </NativeBaseText>
  );
};
