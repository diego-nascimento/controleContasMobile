import {ErrorMessage} from '../../../../components/ErrorMessage';
import React from 'react';
import {useHome} from '../../hooks/index';

export const ShowMessageError: React.FC = () => {
  const {error} = useHome();
  return error ? <ErrorMessage message={error} /> : null;
};
