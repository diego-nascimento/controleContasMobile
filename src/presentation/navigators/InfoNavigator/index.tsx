import React from 'react';
import {Home} from '../../screens/Home';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {InfoNavigatorParams} from '../../NavigatorsProps';

const Tab = createMaterialTopTabNavigator<InfoNavigatorParams>();

export const InfoNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Extrato">
      <Tab.Screen name="Extrato" component={Home} />
      <Tab.Screen name="Entradas">
        {props => <Home {...props} status="entry" />}
      </Tab.Screen>
      <Tab.Screen name="Saidas">
        {props => <Home {...props} status="exit" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
