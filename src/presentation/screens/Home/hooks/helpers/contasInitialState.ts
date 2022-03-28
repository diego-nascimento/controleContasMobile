import React from 'react';
import {contaModel} from '../../../../../models/conta';
import {contasSumMonth} from '../../../../../shared/calculations/contasMonth';

interface contasInitialStateParams {
  contas: contaModel[];
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setcontasShowing: React.Dispatch<React.SetStateAction<contaModel[]>>;
}

export const contasInitialState = ({
  contas,
  setTotal,
  setcontasShowing,
}: contasInitialStateParams) => {
  if (contas.length > 0) {
    const {contasMonth, contasSum} = contasSumMonth({
      contas,
      month: {
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      },
    });
    setTotal(contasSum);
    setcontasShowing(contasMonth);
  }
};
