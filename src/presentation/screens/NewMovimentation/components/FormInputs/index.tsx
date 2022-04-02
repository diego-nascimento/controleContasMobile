import React from 'react';
import {InputText} from '../../../../components/InputField';
import {useNewMovimentaion} from '../../hooks/';
import * as SC from './style';

export const FormInputs = () => {
  const {control, errors} = useNewMovimentaion();
  return (
    <SC.Container>
      <InputText
        label="Nome"
        control={control}
        errors={errors}
        name="name"
        type="ascii-capable"
        rules={{
          max: 20,
          min: 5,
          required: true,
        }}
      />
      <InputText
        label="Valor"
        control={control}
        errors={errors}
        name="value"
        type="numeric"
        rules={{
          min: 1,
          required: true,
        }}
      />
    </SC.Container>
  );
};
