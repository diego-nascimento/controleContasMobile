import React from 'react';
import {contaModel} from '../../../../../models/conta';
import {httpClient} from '../../../../../shared/http';
import {CONTAS_ENDPOINT} from '../../constants';

interface getDataParams {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setContas: React.Dispatch<React.SetStateAction<contaModel[]>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  data: any;
}

type getContasTypes = {
  contas: contaModel[];
  soma: string;
};

export const getContasData = async ({
  setContas,
  setError,
  setLoading,
  data,
  setTotal,
}: getDataParams) => {
  setError(null);
  setLoading(true);
  const response = await httpClient<getContasTypes | any>({
    endPoint: CONTAS_ENDPOINT,
    baseURL: 'http://10.0.2.2:8082',
    data,
    method: 'POST',
  });

  if (response.statusCode !== 200) {
    setError(response.data);
  } else {
    setTotal(parseFloat(response.data.soma));
    setContas(response.data.contas);
  }
  setLoading(false);
};
