import * as SC from './style';
import React from 'react';
import {formatDate} from '../Conta/helper/formatDate';

type paramsTypes = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate: Date;
};

interface HeaderTopTotal {
  params: paramsTypes[];
}

export const HeaderTopTotal: React.FC<HeaderTopTotal> = ({params}) => {
  return (
    <SC.SelectMonthContainer>
      {params.map((param, index) => {
        return (
          <SC.ButtonSelectMonth
            key={index}
            onPressIn={() => {
              param.setShow(true);
            }}>
            <SC.ButtonSelectMonthText>
              {formatDate(param.selectedDate)}
            </SC.ButtonSelectMonthText>
          </SC.ButtonSelectMonth>
        );
      })}
    </SC.SelectMonthContainer>
  );
};
