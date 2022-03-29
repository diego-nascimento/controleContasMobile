import React, {useCallback, useEffect} from 'react';
import {contaModel} from '../../../../models/conta';
import {contasInitialState} from './helpers/contasInitialState';
import {getContasData} from './helpers/getContasData';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

export const useHomeHooks = () => {
  const [contas, setContas] = React.useState<contaModel[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [afterSelectedDate, setAfterSelectedDate] = React.useState<Date>(
    startOfMonth(new Date()),
  );
  const [beforeSelectedDate, setBeforeSelectedDate] = React.useState<Date>(
    endOfMonth(new Date()),
  );

  const handleContas = useCallback(async () => {
    getContasData({
      setContas,
      setError,
      setLoading,
      data: {
        after: afterSelectedDate,
        before: beforeSelectedDate,
      },
    });
  }, [afterSelectedDate, beforeSelectedDate]);

  useEffect(() => {
    handleContas();
  }, [handleContas]);

  useEffect(() => {
    contasInitialState({
      contas,
      setTotal,
    });
  }, [contas]);

  return {
    error,
    loading,
    total,
    setAfterSelectedDate,
    afterSelectedDate,
    contas,
    setBeforeSelectedDate,
    beforeSelectedDate,
  };
};
