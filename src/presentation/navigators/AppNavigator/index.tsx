import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';

import {InfoNavigator} from '../InfoNavigator';
import {AppNavigatorParams} from '../../NavigatorsProps';
import {NewMovimentation} from '../../screens/NewMovimentation';
import {NewUser} from '../../screens/NewUser';

const Stack = createNativeStackNavigator<AppNavigatorParams>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Info">
      <Stack.Screen
        name="Info"
        component={InfoNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewMovimentation"
        component={NewMovimentation}
        options={{
          headerBackTitle: 'Nova movimentação',
          title: 'Nova movimentação',
        }}
      />
      <Stack.Screen
        name="NewUser"
        component={NewUser}
        options={{
          headerBackTitle: 'Novo Usuario',
          title: 'Novo Usuario',
        }}
      />
    </Stack.Navigator>
  );
};
