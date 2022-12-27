import {
  Button as NativeBaseButton,
  IButtonProps
} from 'native-base';
interface IButon extends IButtonProps {
  children: React.ReactNode;
}
export const ButtonSecondary = ({
  children,
  ...props
}: IButon) => {
  return (
    <NativeBaseButton
      bg="white"
      w="full"
      rounded="lg"
      borderColor="gray.200"
      borderWidth={2}
      height="14"
      _pressed={{
        bg: 'gray.200'
      }}
      {...props}
    >
      {children}
    </NativeBaseButton>
  );
};
