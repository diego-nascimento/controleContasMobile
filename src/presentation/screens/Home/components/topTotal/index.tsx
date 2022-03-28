import React from 'react';
import NumberFormat from 'react-number-format';
import * as SC from './style';

interface TotalTopParams {
  total: number;
}

export const TotalTop: React.FC<TotalTopParams> = ({total}) => {
  return (
    <SC.TotalContainer>
      <NumberFormat
        value={total}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'R$'}
        renderText={formattedValue => (
          <SC.TotalValue>{formattedValue}</SC.TotalValue>
        )}
      />
    </SC.TotalContainer>
  );
};
