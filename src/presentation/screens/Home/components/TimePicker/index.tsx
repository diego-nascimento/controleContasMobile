import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import React from 'react';

interface TimePickerParams {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  selectedDate: Date;
}

export const TimePicker: React.FC<TimePickerParams> = ({
  selectedDate,
  setSelectedDate,
  setShow,
  show,
}) => {
  const onDateChange = (event: DateTimePickerEvent, date?: Date) => {
    setShow(false);
    date && setSelectedDate(date);
  };
  return show ? (
    <DateTimePicker value={selectedDate} mode="date" onChange={onDateChange} />
  ) : null;
};
