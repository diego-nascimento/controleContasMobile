import React from 'react';
import {StatusBar} from 'react-native';

import {useTheme} from 'styled-components';

import {PageStateLoading} from './components/pageStateLoading';
import {ShowMessageError} from './components/showMessageError';

import {HomeProvider} from './hooks';
import * as SC from './style';

export interface HomeParams {
  status: 'entry' | 'exit' | undefined;
}

export const Home: React.FC<HomeParams> = ({status}: HomeParams) => {
  const theme = useTheme();

  return (
    <HomeProvider status={status}>
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
