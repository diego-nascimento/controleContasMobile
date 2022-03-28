import React, {useEffect} from 'react';
import {contaModel} from '../../../../models/conta';
import {contasInitialState} from './helpers/contasInitialState';
import {getContasData} from './helpers/getContasData';

export const useHomeHooks = () => {
  const [contas, setContas] = React.useState<contaModel[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [contasShowing, setcontasShowing] = React.useState<contaModel[]>([]);

  const handleContas = async () => {
    getContasData({
      setContas,
      setError,
      setLoading,
    });
  };

  useEffect(() => {
    handleContas();
  }, []);

  useEffect(() => {
    contasInitialState({
      contas,
      setTotal,
      setcontasShowing,
    });
  }, [contas]);

  return {
    contasShowing,
    error,
    loading,
    total,
  };
};
