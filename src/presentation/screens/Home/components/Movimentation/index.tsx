import React from 'react';
import NumberFormat from 'react-number-format';

import {movimentationModel} from '../../../../../models/movimentation';
import {MovimentationLeftContainer} from '../MovimentationLeftSide';
import {formatDate} from './helper/formatDate';
import * as SC from './style';

interface movimentationParams {
  item: movimentationModel;
}

export const Movimentation: React.FC<movimentationParams> = ({item}) => {
  return (
    <SC.Wrapper status={item.status}>
      <MovimentationLeftContainer item={item} />
      <SC.ContainerRight>
        <NumberFormat
          value={item.value}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'R$'}
          renderText={formattedValue => (
            <SC.ValueText>{formattedValue}</SC.ValueText>
          )}
        />
        <SC.PaymentDateText>{formatDate(item.date)}</SC.PaymentDateText>
      </SC.ContainerRight>
    </SC.Wrapper>
  );
};
