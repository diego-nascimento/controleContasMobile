import React from 'react';
import {StatusBar} from 'react-native';

import {useTheme} from 'styled-components';
import {ErrorMessage} from '../../components/ErrorMessage';
import {LoadingScreen} from '../../components/LoadingScreen';
import {ListContas} from './components/ListContas';
import {TotalTop} from './components/topTotal';
import {useHomeHooks} from './hooks';
import * as SC from './style';

export const Home: React.FC = () => {
  const theme = useTheme();
  const {contasShowing, total, error, loading} = useHomeHooks();

  return (
    <SC.Wrapper>
      <StatusBar
        backgroundColor={theme.pallete.primary.color2}
        barStyle="light-content"
      />
      {error && <ErrorMessage message={error} />}
      {loading ? (
        <LoadingScreen />
      ) : (
        <SC.Container>
          <TotalTop total={total} />
          <ListContas contas={contasShowing} />
        </SC.Container>
      )}
    </SC.Wrapper>
  );
};
