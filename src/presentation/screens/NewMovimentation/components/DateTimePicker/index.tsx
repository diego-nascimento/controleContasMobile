import React from 'react';

import {TimePicker} from '../../../../components/TimePicker';
import {formatDate} from '../../../Home/components/Movimentation/helper/formatDate';
import * as SC from './style';
import {useNewMovimentaion} from '../../hooks/';
import {TimePickerContainerToggler} from '../../../../components/TimePickerContainerToggler';

export const DateTimePicker: React.FC = () => {
  const {date, setDate, setShowTimePicker, showTimePicker} =
    useNewMovimentaion();
  return (
    <SC.Container>
      <TimePickerContainerToggler
        date={formatDate(date)}
        setShow={setShowTimePicker}
      />

      <TimePicker
        show={showTimePicker}
        setShow={setShowTimePicker}
        selectedDate={date}
        setSelectedDate={setDate}
      />
    </SC.Container>
  );
};
