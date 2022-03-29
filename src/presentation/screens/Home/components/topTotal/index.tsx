import React from 'react';
import NumberFormat from 'react-number-format';
import * as SC from './style';

import {HeaderTopTotal} from '../Header';
import {TimePickers} from '../TimePickers';
import {FooterTopTotal} from '../Footer';
import {predefinedParams} from '../../helpers/index';
import {useHome} from '../../hooks/index';

export const TotalTop: React.FC = () => {
  const [showAfter, setShowAfter] = React.useState<boolean>(false);
  const [showBefore, setShowBefore] = React.useState<boolean>(false);
  const {
    afterSelectedDate,
    beforeSelectedDate,
    setAfterSelectedDate,
    setBeforeSelectedDate,
    total,
  } = useHome();

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
            setSelectedDate: setAfterSelectedDate,
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
        setafterSelectedDate={setAfterSelectedDate}
        params={predefinedParams}
      />
    </SC.TotalContainer>
  );
};
