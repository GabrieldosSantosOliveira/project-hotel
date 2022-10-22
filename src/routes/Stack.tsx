import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './../screens/Home';
const { Group, Navigator, Screen } = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
