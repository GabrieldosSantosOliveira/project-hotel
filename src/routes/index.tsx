import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';
import { StackRoutes, StackRoutesNoAuth } from './Stack';
export const Routes = () => {
  const { user } = useAuth();
  console.log('USER =========>', user);
  return (
    <NavigationContainer>
      {user?.user ? <StackRoutesNoAuth /> : <StackRoutes />}
    </NavigationContainer>
  );
};
