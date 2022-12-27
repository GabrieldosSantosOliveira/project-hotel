import { createStackNavigator } from '@react-navigation/stack';

import { Auth } from '../screens/Auth';
import { Home } from '../screens/Home';
import { Register } from '../screens/Register';
import { Welcome } from '../screens/Welcome';
import { HomePage } from './../screens/HomePage';
const { Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="homepage" component={HomePage} />
      <Screen name="welcome" component={Welcome} />
      <Screen name="auth" component={Auth} />
      <Screen name="register" component={Register} />
    </Navigator>
  );
};
export const StackRoutesNoAuth = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="home" component={Home} />
    </Navigator>
  );
};
