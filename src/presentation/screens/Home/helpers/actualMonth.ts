import endOfMonth from 'date-fns/endOfMonth';
import startOfMonth from 'date-fns/startOfMonth';
import {paramsTypes} from '../components/Footer';

const getStartOfActualMonth = () => {
  return startOfMonth(new Date());
};

const getEndOfActualMonth = () => {
  return endOfMonth(new Date());
};

export const actualMonthPreDefined = (): paramsTypes => {
  return {
    getAfterDate: getStartOfActualMonth,
    getBeforeDate: getEndOfActualMonth,
    label: 'Mês atual',
  };
};
