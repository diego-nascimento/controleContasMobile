import React from 'react';
import {contaModel} from '../../../../../models/conta';
import {httpClient} from '../../../../../shared/http';
import {CONTAS_ENDPOINT} from '../../constants';

interface getDataParams {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setContas: React.Dispatch<React.SetStateAction<contaModel[]>>;
}

export const getContasData = async ({
  setContas,
  setError,
  setLoading,
}: getDataParams) => {
  setError(null);
  setLoading(true);
  const response = await httpClient({
    endPoint: CONTAS_ENDPOINT,
    baseURL: 'http://10.0.2.2:8082',
  });

  if (response.statusCode !== 200) {
    setError(response.data);
  } else {
    setContas(response.data);
  }
  setLoading(false);
};
