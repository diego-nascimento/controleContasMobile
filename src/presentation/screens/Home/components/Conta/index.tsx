import React from 'react';
import NumberFormat from 'react-number-format';
import {contaModel} from '../../../../../models/conta';
import {formatDate} from './helper/formatDate';
import * as SC from './style';

interface contaParams {
  item: contaModel;
}

export const Conta: React.FC<contaParams> = ({item}) => {
  return (
    <SC.Wrapper>
      <SC.WrapperLeft>
        <SC.MinusIcon />
        <SC.ContainerLeft>
          <SC.ContaName>{item.name}</SC.ContaName>
          {item.user && <SC.NameText>Quem: {item.user.name}</SC.NameText>}
        </SC.ContainerLeft>
      </SC.WrapperLeft>
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
        {item.paymentDate && (
          <SC.PaymentDateText>
            {formatDate(item.paymentDate)}
          </SC.PaymentDateText>
        )}
      </SC.ContainerRight>
    </SC.Wrapper>
  );
};
