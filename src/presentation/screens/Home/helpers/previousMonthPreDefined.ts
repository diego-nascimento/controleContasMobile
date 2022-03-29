import endOfMonth from 'date-fns/endOfMonth';
import startOfMonth from 'date-fns/startOfMonth';
import {paramsTypes} from '../components/Footer';

const getStartOfPreviousMonth = () => {
  const thisMonth = startOfMonth(new Date());
  return startOfMonth(new Date(thisMonth.setMonth(thisMonth.getMonth() - 1)));
};

const getEndOfPreviousMonth = () => {
  const thisMonth = startOfMonth(new Date());
  return endOfMonth(new Date(thisMonth.setMonth(thisMonth.getMonth() - 1)));
};

export const previousMonthPreDefined = (): paramsTypes => {
  return {
    getAfterDate: getStartOfPreviousMonth,
    getBeforeDate: getEndOfPreviousMonth,
    label: 'Mês anterior',
  };
};
