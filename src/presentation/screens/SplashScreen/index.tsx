import React, {useEffect} from 'react';
import * as SC from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeNavigatorParams} from '../../NavigatorsProps';
import {Animated} from 'react-native';

type SplashScreenProps = {
  navigation: StackNavigationProp<HomeNavigatorParams, 'Splash'>;
};

export const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  const fadeAnimationBackGround = React.useRef(new Animated.Value(0)).current;

  const fadeAnimationGaelicos = React.useRef(new Animated.Value(0)).current;
  const toTopAnimationGaelicos = React.useRef(new Animated.Value(0)).current;

  const fadeAnimationFinances = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnimationBackGround, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(fadeAnimationFinances, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(fadeAnimationGaelicos, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(toTopAnimationGaelicos, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [
    fadeAnimationBackGround,
    fadeAnimationGaelicos,
    fadeAnimationFinances,
    toTopAnimationGaelicos,
  ]);

  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Info');
    }, 4000);
  }, [navigation]);
  return (
    <SC.Container
      style={{
        opacity: fadeAnimationBackGround,
      }}>
      <SC.BiggerText
        style={{
          opacity: fadeAnimationGaelicos,
          transform: [
            {
              translateY: toTopAnimationGaelicos.interpolate({
                inputRange: [0, 1],
                outputRange: [10, 0],
              }),
            },
          ],
        }}>
        Gaelicos
      </SC.BiggerText>
      <SC.Smaller
        style={{
          opacity: fadeAnimationFinances,
        }}>
        Finances
      </SC.Smaller>
    </SC.Container>
  );
};
