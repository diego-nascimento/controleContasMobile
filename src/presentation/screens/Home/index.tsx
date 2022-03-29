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
  const {
    total,
    error,
    loading,
    afterSelectedDate,
    setAfterSelectedDate,
    contas,
    setBeforeSelectedDate,
    beforeSelectedDate,
  } = useHomeHooks();

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
          <TotalTop
            total={total}
            afterSelectedDate={afterSelectedDate}
            setafterSelectedDate={setAfterSelectedDate}
            setBeforeSelectedDate={setBeforeSelectedDate}
            beforeSelectedDate={beforeSelectedDate}
          />
          <ListContas contas={contas} />
        </SC.Container>
      )}
    </SC.Wrapper>
  );
};
