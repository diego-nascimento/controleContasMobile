import React from 'react';

import {SelectDropDownComponent} from '../../../../components/SelectDropDown';
import {useNewMovimentaion} from '../../hooks';
import {DateTimePicker} from '../DateTimePicker';
import * as SC from './style';

export const ContainerPickers = () => {
  const {users, setUserSelected} = useNewMovimentaion();
  return (
    <SC.DateUserContainer>
      <DateTimePicker />
      <SC.UserPicker>
        <SelectDropDownComponent
          data={users}
          fieldToShow="name"
          placeholderMessage="Selecione responsavel"
          setSelected={setUserSelected}
          nullOption={true}
        />
      </SC.UserPicker>
    </SC.DateUserContainer>
  );
};
