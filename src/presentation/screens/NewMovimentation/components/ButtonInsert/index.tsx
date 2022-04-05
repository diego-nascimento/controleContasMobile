import React from 'react';
import {useNewMovimentaion} from '../../hooks';
import * as SC from './style';

export const ButtonInsert: React.FC = () => {
  const {handleSubmit, handlePressFinalizar} = useNewMovimentaion();
  return (
    <SC.ButtonInsert onPress={handleSubmit(handlePressFinalizar)}>
      <SC.ButtonInsertText>Finalizar</SC.ButtonInsertText>
    </SC.ButtonInsert>
  );
};
