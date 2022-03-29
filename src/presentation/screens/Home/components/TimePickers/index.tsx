import React from 'react';
import {TimePicker} from '../TimePicker';

type ParamsTypes = {
  selectedDate: Date;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  show: boolean;
};

interface TimePickersParams {
  params: ParamsTypes[];
}

export const TimePickers: React.FC<TimePickersParams> = ({params}) => {
  return (
    <>
      {params.map((param, index) => {
        return (
          <TimePicker
            key={index}
            selectedDate={param.selectedDate}
            setSelectedDate={param.setSelectedDate}
            setShow={param.setShow}
            show={param.show}
          />
        );
      })}
    </>
  );
};
