import React from 'react';
import * as SC from './style';
import {Controller} from 'react-hook-form';

interface InputTextProps {
  label: string;
  control: any;
  errors: any;
  name: string;
  rules: any;
  type: 'ascii-capable' | 'numeric';
}

export function InputText({
  label,
  control,
  name,
  errors,
  rules,
  type,
}: InputTextProps) {
  return (
    <SC.Wrapper>
      <Controller
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => (
          <SC.Container>
            <SC.TextField
              mode="outlined"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType={type}
              label={label}
            />
          </SC.Container>
        )}
        name={name}
      />
      {errors[name] && <SC.Error>{errors[name].message}</SC.Error>}
    </SC.Wrapper>
  );
}
