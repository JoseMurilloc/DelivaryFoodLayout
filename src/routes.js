import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Pages from './pages';

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Pages.LoginScreen} />
        <Stack.Screen name="Register" component={Pages.RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
