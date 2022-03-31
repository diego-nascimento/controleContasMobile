import React, {ReactNode, useCallback, useEffect} from 'react';
import {movimentationModel} from '../../../../models/movimentation';

import {getMovimentationsData} from './helpers/getContasData';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

interface createContextTypes {
  error: string | null;
  loading: boolean;
  total: number;
  setAfterSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  afterSelectedDate: Date;
  movimentations: movimentationModel[];
  setBeforeSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  beforeSelectedDate: Date;
}

export const HomeContext = React.createContext({} as createContextTypes);

type HomeProviderProps = {
  children: ReactNode;
  status: 'entry' | 'exit' | undefined;
};

const HomeProvider: React.FC<HomeProviderProps> = ({children, status}) => {
  const [movimentations, setMovimentations] = React.useState<
    movimentationModel[]
  >([]);
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
    getMovimentationsData({
      setMovimentations,
      setTotal,
      setError,
      setLoading,
      data: {
        after: afterSelectedDate,
        before: beforeSelectedDate,
        status,
      },
    });
  }, [afterSelectedDate, beforeSelectedDate, status]);

  useEffect(() => {
    handleContas();
  }, [handleContas]);

  return (
    <HomeContext.Provider
      value={{
        error,
        loading,
        total,
        setAfterSelectedDate,
        afterSelectedDate,
        movimentations,
        setBeforeSelectedDate,
        beforeSelectedDate,
      }}>
      {children}
    </HomeContext.Provider>
  );
};

function useHome() {
  const context = React.useContext(HomeContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a HomeProvider');
  }
  return context;
}

export {HomeProvider, useHome};
