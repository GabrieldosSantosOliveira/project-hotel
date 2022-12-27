import {
  Button as NativeBaseButton,
  IButtonProps
} from 'native-base';
interface IButon extends IButtonProps {
  children: React.ReactNode;
}
export const ButtonPrimary = ({
  children,
  ...props
}: IButon) => {
  return (
    <NativeBaseButton
      bg="blue.700"
      w="full"
      rounded="3xl"
      height="14"
      _pressed={{
        bg: 'blue.500'
      }}
      {...props}
    >
      {children}
    </NativeBaseButton>
  );
};
