import React from 'react';
import {contaModel} from '../../../../../models/conta';
import {contasSumMonth} from '../../../../../shared/calculations/contasMonth';

interface contasInitialStateParams {
  contas: contaModel[];
  setTotal: React.Dispatch<React.SetStateAction<number>>;
}

export const contasInitialState = ({
  contas,
  setTotal,
}: contasInitialStateParams) => {
  const {contasSum} = contasSumMonth({
    contas,
  });
  setTotal(contasSum);
};
