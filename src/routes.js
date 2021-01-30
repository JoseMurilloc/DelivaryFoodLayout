import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <Stack.Screen
          name="Home"
          component={Pages.HomeScreen}
          options={({navigation}) => ({
            title: 'Select a option',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#24AF89',
            },
            headerStyle: {
              backgroundColor: '#F3F3F3',
              elevation: 0,
            },
            headerLeft: () => (
              <Icon
                name="arrow-back-ios"
                size={20}
                color="#000"
                style={{
                  marginLeft: 25,
                }}
                onPress={() => navigation.goBack()}
              />
            ),
          })}
        />
        <Stack.Screen name="Dashboard" component={Pages.DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
