import React from 'react';
import * as SC from './style';

interface ErrorMessageParams {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageParams> = ({message}) => {
  return <SC.Text>{message}</SC.Text>;
};
