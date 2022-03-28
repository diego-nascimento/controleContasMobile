import {contaModel} from '../../../models/conta';

type dateParams = {
  month: number;
  year: number;
};

interface contasMonthParams {
  contas: contaModel[];
  month: dateParams;
}

interface contasMonthReturn {
  contasSum: number;
  contasMonth: contaModel[];
}

export const contasSumMonth = ({
  contas,
  month,
}: contasMonthParams): contasMonthReturn => {
  const contasMonth = contas.filter(conta => {
    if (conta.paymentDate) {
      const paymentDate = new Date(conta.paymentDate);

      if (
        paymentDate.getFullYear() === month.year &&
        paymentDate.getMonth() + 1 === month.month
      ) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });

  const contasSum = contasMonth.reduce(
    (previousValue, conta) => previousValue + conta.value,
    0,
  );
  return {
    contasSum,
    contasMonth,
  };
};
