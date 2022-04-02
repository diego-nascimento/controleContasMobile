import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {SplashScreen} from '../../screens/SplashScreen';

import {HomeNavigatorParams} from '../../NavigatorsProps';
import {AppNavigator} from '../AppNavigator';

const Stack = createNativeStackNavigator<HomeNavigatorParams>();

export const HomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={AppNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
