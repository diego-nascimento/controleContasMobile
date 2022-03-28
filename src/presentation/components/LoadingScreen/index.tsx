import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

import * as SC from './style';

export const LoadingScreen: React.FC = () => {
  const theme = useTheme();
  return (
    <SC.Container>
      <ActivityIndicator
        size={'large'}
        color={theme.pallete.secondary.color1}
      />
    </SC.Container>
  );
};
