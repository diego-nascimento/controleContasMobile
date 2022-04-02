import React from 'react';
import {Home} from '../../screens/Home';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AppNavigatorParams, InfoNavigatorParams} from '../../NavigatorsProps';
import * as SC from './style';
import {FloatBottomButton} from '../../components/FloatBottomButton';
import {
  handlePressOnButtonBottomResponseTypes,
  handlePressOnButtonBottom,
  handlePressOnButtonBottomParams,
} from '../../screens/Home/helpers/handlePressOnButtonBottom';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Header} from './components/Header';

const Tab = createMaterialTopTabNavigator<InfoNavigatorParams>();

export const InfoNavigator: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<AppNavigatorParams, 'Info'>>();

  return (
    <SC.Container>
      <Header />
      <Tab.Navigator initialRouteName="Extrato">
        <Tab.Screen name="Extrato" component={Home} />
        <Tab.Screen name="Entradas">
          {props => <Home {...props} status="entry" />}
        </Tab.Screen>
        <Tab.Screen name="Saidas">
          {props => <Home {...props} status="exit" />}
        </Tab.Screen>
      </Tab.Navigator>
      <FloatBottomButton<
        handlePressOnButtonBottomParams,
        handlePressOnButtonBottomResponseTypes
      >
        callBack={handlePressOnButtonBottom}
        params={{
          navigation: navigation,
        }}
      />
    </SC.Container>
  );
};
