import React from 'react';
import {FlatList} from 'react-native';

import {Movimentation} from '../Movimentation';
import * as SC from './style';
import {useHome} from '../../hooks';

export const ListMovimentations: React.FC = () => {
  const {movimentations} = useHome();
  return (
    <SC.Container>
      <FlatList
        data={movimentations}
        keyExtractor={conta => conta.id.toString()}
        renderItem={Movimentation}
      />
    </SC.Container>
  );
};
