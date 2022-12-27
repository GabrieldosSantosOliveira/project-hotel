import {
  Input as NativeBaseInput,
  IInputProps
} from 'native-base';
import { FC, forwardRef } from 'react';
import {
  UseFormRegister,
  FieldValues
} from 'react-hook-form';
export const Input: FC<IInputProps> = ({ ...props }) => {
  return (
    <NativeBaseInput
      h="14"
      borderRadius="xl"
      _focus={{
        borderColor: 'blue.400'
      }}
      {...props}
    />
  );
};
Input.displayName = 'Input';
