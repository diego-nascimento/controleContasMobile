import React from 'react';
import {ContaImagePicker} from './components/ContaImagePicker';

import {DateTimePicker} from './components/DateTimePicker';
import {FormInputs} from './components/FormInputs';
import {NewMovimentationProvider} from './hooks';

import * as SC from './style';

export const NewMovimentation = () => {
  return (
    <NewMovimentationProvider>
      <SC.Container>
        <FormInputs />
        <DateTimePicker />
        <ContaImagePicker />
      </SC.Container>
    </NewMovimentationProvider>
  );
};
