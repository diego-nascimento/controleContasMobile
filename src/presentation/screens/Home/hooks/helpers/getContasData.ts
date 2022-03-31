import React from 'react';
import {movimentationModel} from '../../../../../models/movimentation';
import {httpClient} from '../../../../../shared/http';
import {CONTAS_ENDPOINT} from '../../constants';

interface getDataParams {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setMovimentations: React.Dispatch<React.SetStateAction<movimentationModel[]>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  data: any;
}

type getMovimentationsTypes = {
  movimentations: movimentationModel[];
  soma: string;
};

export const getMovimentationsData = async ({
  setMovimentations,
  setError,
  setLoading,
  data,
  setTotal,
}: getDataParams) => {
  setError(null);
  setLoading(true);
  const response = await httpClient<getMovimentationsTypes | any>({
    endPoint: CONTAS_ENDPOINT,
    baseURL: 'http://10.0.2.2:8082',
    data,
    method: 'POST',
  });

  if (response.statusCode !== 200) {
    setError(response.data);
  } else {
    setTotal(parseFloat(response.data.soma));
    setMovimentations(response.data.movimentations);
  }
  setLoading(false);
};
