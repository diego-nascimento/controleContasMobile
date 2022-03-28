import React from 'react';
import {FlatList} from 'react-native';
import {contaModel} from '../../../../../models/conta';
import {Conta} from '../Conta';
import * as SC from './style';

interface ListContas {
  contas: contaModel[];
}

export const ListContas: React.FC<ListContas> = ({contas}) => {
  return (
    <SC.Container>
      <FlatList
        data={contas}
        keyExtractor={conta => conta.id.toString()}
        renderItem={Conta}
      />
    </SC.Container>
  );
};
