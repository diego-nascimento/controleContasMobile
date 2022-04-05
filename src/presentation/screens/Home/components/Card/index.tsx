import React from 'react';
import NumberFormat from 'react-number-format';
import {predefinedParams} from '../../helpers';
import {useHome} from '../../hooks';
import {FooterTopTotal} from '../Footer';
import {RefreshIcon} from '../RefreshIcon';
import {TimePickers} from '../TimePickers';
import * as SC from './style';

interface CardProps {
  showAfter: boolean;
  showBefore: boolean;
  setShowAfter: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBefore: React.Dispatch<React.SetStateAction<boolean>>;
  handleContas: () => void;
}

export const Card: React.FC<CardProps> = ({
  showAfter,
  setShowAfter,
  setShowBefore,
  showBefore,
  handleContas,
}) => {
  const {
    afterSelectedDate,
    beforeSelectedDate,
    setAfterSelectedDate,
    setBeforeSelectedDate,
    total,
  } = useHome();
  return (
    <SC.TotalContainer>
      <RefreshIcon handlePress={handleContas} />
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
