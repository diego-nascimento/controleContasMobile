import React from 'react';
import {TouchableHighlight} from 'react-native';
import {TimePicker} from '../../../../components/TimePicker';
import {formatDate} from '../../../Home/components/Movimentation/helper/formatDate';
import * as SC from './style';
import {useNewMovimentaion} from '../../hooks/';

export const DateTimePicker: React.FC = () => {
  const {date, setDate, setShowTimePicker, showTimePicker} =
    useNewMovimentaion();
  return (
    <SC.Container>
      <TouchableHighlight onPress={() => setShowTimePicker(true)}>
        <SC.DateSelected>{formatDate(date)}</SC.DateSelected>
      </TouchableHighlight>
      <TimePicker
        show={showTimePicker}
        setShow={setShowTimePicker}
        selectedDate={date}
        setSelectedDate={setDate}
      />
    </SC.Container>
  );
};
