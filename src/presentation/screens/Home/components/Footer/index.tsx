import React from 'react';
import * as SC from './style';

export type paramsTypes = {
  getAfterDate: () => Date;
  getBeforeDate: () => Date;
  label: string;
};

interface FooterTotalParams {
  params: paramsTypes[];
  setBeforeSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  setafterSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const FooterTopTotal: React.FC<FooterTotalParams> = ({
  params,
  setafterSelectedDate,
  setBeforeSelectedDate,
}) => {
  const handlePreDefined = (afterDate: Date, beforeDate: Date) => {
    setafterSelectedDate(afterDate);
    setBeforeSelectedDate(beforeDate);
  };

  return (
    <SC.SelectMonthDefinedContainer>
      {params.map((param, index) => {
        return (
          <SC.ButtonSelectMonthDefined
            key={index}
            onPressIn={() => {
              handlePreDefined(param.getAfterDate(), param.getBeforeDate());
            }}>
            <SC.ButtonSelectMonthTextDefined>
              {param.label}
            </SC.ButtonSelectMonthTextDefined>
          </SC.ButtonSelectMonthDefined>
        );
      })}
    </SC.SelectMonthDefinedContainer>
  );
};
