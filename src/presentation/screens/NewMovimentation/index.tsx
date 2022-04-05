import React from 'react';
import {ButtonInsert} from './components/ButtonInsert';
import {ContaImagePicker} from './components/ContaImagePicker';
import {ContainerPickers} from './components/ContainerPickers';

import {FormInputs} from './components/FormInputs';
import {ModalStatusMovimentation} from './components/ModalStatusMovimentation';
import {NewMovimentationProvider} from './hooks';
import * as SC from './style';

export const NewMovimentation = () => {
  return (
    <NewMovimentationProvider>
      <ModalStatusMovimentation />
      <SC.Wrapper>
        <SC.Formulario>
          <FormInputs />
          <ContainerPickers />
          <ContaImagePicker />
        </SC.Formulario>
        <ButtonInsert />
      </SC.Wrapper>
    </NewMovimentationProvider>
  );
};
