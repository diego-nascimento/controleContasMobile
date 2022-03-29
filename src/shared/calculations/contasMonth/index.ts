import {contaModel} from '../../../models/conta';

interface contasMonthParams {
  contas: contaModel[];
}
interface contasMonthReturn {
  contasSum: number;
}

export const contasSumMonth = ({
  contas,
}: contasMonthParams): contasMonthReturn => {
  const contasSum = contas.reduce(
    (previousValue, conta) => previousValue + conta.value,
    0,
  );
  return {
    contasSum,
  };
};
