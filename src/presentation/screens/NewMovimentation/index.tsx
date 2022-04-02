import React from 'react';
import {SelectDropDownComponent} from '../../components/SelectDropDown';
import {ContaImagePicker} from './components/ContaImagePicker';

import {DateTimePicker} from './components/DateTimePicker';
import {FormInputs} from './components/FormInputs';
import {NewMovimentationProvider} from './hooks';

import * as SC from './style';

export const NewMovimentation = () => {
  const data = [{name: 'Poirio'}, {name: 'Gaelico'}, {name: 'Oria'}];
  const [value, setValue] = React.useState<any>(null);
  return (
    <NewMovimentationProvider>
      <SC.Container>
        <FormInputs />
        <SC.DateUserContainer>
          <DateTimePicker />
          <SelectDropDownComponent
            data={data}
            fieldToShow="name"
            setSelected={setValue}
          />
        </SC.DateUserContainer>

        <ContaImagePicker />
      </SC.Container>
    </NewMovimentationProvider>
  );
};
