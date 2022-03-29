import React from 'react';
import NumberFormat from 'react-number-format';
import * as SC from './style';

import {HeaderTopTotal} from '../Header';
import {TimePickers} from '../TimePickers';
import {FooterTopTotal} from '../Footer';
import {predefinedParams} from '../../helpers/index';
interface TotalTopParams {
  total: number;
  setafterSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  afterSelectedDate: Date;
  setBeforeSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  beforeSelectedDate: Date;
}

export const TotalTop: React.FC<TotalTopParams> = ({
  total,
  setafterSelectedDate,
  afterSelectedDate,
  beforeSelectedDate,
  setBeforeSelectedDate,
}) => {
  const [showAfter, setShowAfter] = React.useState<boolean>(false);
  const [showBefore, setShowBefore] = React.useState<boolean>(false);

  return (
    <SC.TotalContainer>
      <HeaderTopTotal
        params={[
          {
            selectedDate: afterSelectedDate,
            setShow: setShowAfter,
          },
          {
            selectedDate: beforeSelectedDate,
            setShow: setShowBefore,
          },
        ]}
      />

      <TimePickers
        params={[
          {
            selectedDate: afterSelectedDate,
            setSelectedDate: setafterSelectedDate,
            show: showAfter,
            setShow: setShowAfter,
          },
          {
            selectedDate: beforeSelectedDate,
            setSelectedDate: setBeforeSelectedDate,
            show: showBefore,
            setShow: setShowBefore,
          },
        ]}
      />

      <NumberFormat
        value={total}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'R$'}
        renderText={formattedValue => (
          <SC.TotalValue>{formattedValue}</SC.TotalValue>
        )}
      />
      <FooterTopTotal
        setBeforeSelectedDate={setBeforeSelectedDate}
        setafterSelectedDate={setafterSelectedDate}
        params={predefinedParams}
      />
    </SC.TotalContainer>
  );
};
