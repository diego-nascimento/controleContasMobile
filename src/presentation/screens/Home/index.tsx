import React from 'react';
import {StatusBar} from 'react-native';

import {useTheme} from 'styled-components';

import {PageStateLoading} from './components/pageStateLoading';
import {ShowMessageError} from './components/showMessageError';

import {HomeProvider} from './hooks';
import * as SC from './style';

export const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <HomeProvider>
      <SC.Wrapper>
        <StatusBar
          backgroundColor={theme.pallete.primary.color2}
          barStyle="light-content"
        />
        <ShowMessageError />
        <PageStateLoading />
      </SC.Wrapper>
    </HomeProvider>
  );
};
