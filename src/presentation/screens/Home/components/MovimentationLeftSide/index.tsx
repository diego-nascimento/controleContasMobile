import {movimentationModel} from '../../../../../models/movimentation';
import React from 'react';
import * as SC from './style';
import {useTheme} from 'styled-components/native';

type MovimentationLeftContainerProps = {
  item: movimentationModel;
};

export const MovimentationLeftContainer: React.FC<
  MovimentationLeftContainerProps
> = ({item}) => {
  const Theme = useTheme();
  return (
    <SC.WrapperLeft>
      <SC.Icon
        name={item.status === 'entry' ? 'plus-circle' : 'minus-circle'}
        color={
          item.status === 'entry'
            ? Theme.pallete.success.color3
            : Theme.pallete.error.color2
        }
      />
      <SC.ContainerLeft>
        <SC.ContaName>{item.name}</SC.ContaName>
        {item.user && <SC.NameText>Quem: {item.user.name}</SC.NameText>}
      </SC.ContainerLeft>
    </SC.WrapperLeft>
  );
};
