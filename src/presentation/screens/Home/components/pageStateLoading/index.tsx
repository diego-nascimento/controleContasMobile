import React from 'react';
import {LoadingScreen} from '../../../../components/LoadingScreen';
import {useHome} from '../../hooks/index';
import {ListMovimentations} from '../ListMovimentations';
import {TotalTop} from '../topTotal';
import * as SC from './style';

export const PageStateLoading: React.FC = () => {
  const {loading} = useHome();

  return loading ? (
    <LoadingScreen />
  ) : (
    <SC.Container>
      <TotalTop />
      <ListMovimentations />
    </SC.Container>
  );
};
