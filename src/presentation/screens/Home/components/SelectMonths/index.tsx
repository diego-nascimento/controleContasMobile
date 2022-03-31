import * as SC from './style';
import React from 'react';
import {formatDate} from '../Movimentation/helper/formatDate';

type paramsTypes = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDate: Date;
};

interface SelectMonthProps {
  params: paramsTypes[];
}

export const SelectMonths: React.FC<SelectMonthProps> = ({params}) => {
  return (
    <SC.Wrapper>
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
    </SC.Wrapper>
  );
};
