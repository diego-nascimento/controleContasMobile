import React from 'react';
import * as SC from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {ScreensParams} from '../../ScreenProps';

type SplashScreenProps = {
  navigation: StackNavigationProp<ScreensParams, 'Splash'>;
};

export const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);
  }, [navigation]);
  return <SC.Container />;
};
