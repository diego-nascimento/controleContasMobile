import React from 'react';
import {Text} from 'react-native';
import {contaModel} from '../../../../../models/conta';
import * as SC from './style';

interface contaParams {
  item: contaModel;
}

export const Conta: React.FC<contaParams> = ({item}) => {
  return (
    <SC.Container>
      <SC.ContaName>{item.name}</SC.ContaName>
      <Text>{item.value}</Text>
      {item.user && <Text>{item.user.name}</Text>}
    </SC.Container>
  );
};
