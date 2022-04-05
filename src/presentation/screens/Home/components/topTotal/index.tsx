import React from 'react';

import * as SC from './style';

import {SelectMonths} from '../SelectMonths';

import {useHome} from '../../hooks/index';
import {Card} from '../Card';

export const TotalTop: React.FC = () => {
  const [showAfter, setShowAfter] = React.useState<boolean>(false);
  const [showBefore, setShowBefore] = React.useState<boolean>(false);
  const {afterSelectedDate, beforeSelectedDate, handleContas} = useHome();

  return (
    <SC.Wrapper>
      <Card
        showAfter={showAfter}
        showBefore={showBefore}
        setShowAfter={setShowAfter}
        setShowBefore={setShowBefore}
        handleContas={handleContas}
      />
      <SelectMonths
        params={[
          {
            icon: 'keyboard-arrow-down',
            selectedDate: afterSelectedDate,
            setShow: setShowAfter,
          },
          {
            selectedDate: beforeSelectedDate,
            setShow: setShowBefore,
            icon: 'keyboard-arrow-up',
          },
        ]}
      />
    </SC.Wrapper>
  );
};
