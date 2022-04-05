import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNewMovimentaion} from '../../hooks';
import * as SC from './style';

export const ModalStatusMovimentation: React.FC = () => {
  const {modalFinalizarShow, setModalFinalizarShow} = useNewMovimentaion();
  return (
    <SC.Wrapper>
      <SC.ModalStyled isVisible={modalFinalizarShow}>
        <SC.Container>
          <TouchableOpacity onPress={() => setModalFinalizarShow(false)}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </SC.Container>
      </SC.ModalStyled>
    </SC.Wrapper>
  );
};
