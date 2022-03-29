import React from 'react';
import {FlatList} from 'react-native';

import {Conta} from '../Conta';
import * as SC from './style';
import {useHome} from '../../hooks';

export const ListContas: React.FC = () => {
  const {contas} = useHome();
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
