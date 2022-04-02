import React from 'react';
import * as SC from './style';

interface TimePickerContainerTogglerProps {
  date: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TimePickerContainerToggler: React.FC<
  TimePickerContainerTogglerProps
> = ({date, setShow}) => {
  return (
    <SC.Container onPress={() => setShow(true)}>
      <SC.DateText>{date}</SC.DateText>
    </SC.Container>
  );
};
